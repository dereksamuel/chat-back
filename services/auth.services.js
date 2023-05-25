const bcrypt = require("bcrypt");
const boom = require("@hapi/boom");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const User = require("./user.services");
const { authConfig, mailConfig } = require("../config/config");
const service = new User();

class AuthService {
  async getUser(email, password) {
    const user = await service.getByEmail(email);
    if (!user) throw boom.unauthorized();

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw boom.unauthorized();

    delete user.dataValues.password;
    delete user.dataValues.recoveryToken;
    return user;
  }

  async upgradeUser(profile) {
    let user = await service.getByEmail(profile._json.blog);
    const hash = await bcrypt.hash("1234", 10);

    if (!user) {
      user = await service.add({
        name: profile.username,
        password: hash,
        email: profile._json.blog,
        bio: profile._json.bio,
        role: "mortal",
      });
    }

    return user;
  }

  signToken(user, additionalConfig = {}) {
    const payload = {
      sub: user.id, // the identifier of this token
      role: user.role,
      ...additionalConfig,
    };
    const token = jwt.sign(payload, authConfig.jwtKey);

    return {
      token,
      user,
      ...additionalConfig,
    };
  }

  async sendRecovery(email) {
    const user = await service.getByEmail(email);
    if (!user) throw boom.unauthorized();

    const payload = { sub: user.id };
    const token = jwt.sign(payload, authConfig.jwtKey, { expiresIn: "10min" });
    const link = `http://myfrontend.com/recovery?token=${token}`;
    await service.update(user.id, { recoveryToken: token });

    const mail = {
      from: mailConfig.senderEmail,
      to: user.email,
      subject: "Recovery email for your password - ChatApp",
      html: `
        <article>
          <h1>Recovery Password</h1>
          <p>You can have a click in this link => ${link}</p>
        </article>
      `,
    };

    const info = await this.sendMail(mail);
    return info;
  }

  async sendMail(infoMail) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: mailConfig.senderEmail,
        pass: mailConfig.senderPassword,
      },
    });
    const info = await transporter.sendMail(infoMail);
    return info;
  }

  async changePassword(token, newPassword) {
    try {
      const payload = jwt.verify(token, authConfig.jwtKey);
      const user = await service.getById(payload.sub);
      if (user.recoveryToken !== token) throw boom.unauthorized();
      const hash = await bcrypt.hash(newPassword, 10);
      service.update(user.id, { password: hash, recoveryToken: null });
      return {
        message: "Password was changed successfully!"
      };
    } catch (error) {
      throw boom.unauthorized();
    }
  }
}

module.exports = AuthService;

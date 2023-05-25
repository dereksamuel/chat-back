const { Strategy } = require("passport-local");

const Auth = require("../../../services/auth.services");
const service = new Auth();

const LocalStrategy = new Strategy({
  usernameField: "email",
  passwordField: "password"
}, async (email, password, done) => {
  try {
    const user = await service.getUser(email, password);
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});

module.exports = LocalStrategy;

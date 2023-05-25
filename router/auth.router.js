const express = require("express");
const passport = require("passport");

const AuthService = require("../services/auth.services");
const { loginSchema, recoverySchema, changePasswordSchema } = require("../schemas/auth.schema");
const validatorHandler = require("../middlewares/validator.handler");

const router = express.Router();
const service = new AuthService();

router.post(
  "/login",
  validatorHandler(loginSchema, "body"),
  passport.authenticate("local", { session: false }),
  async (req, res, next) => {
    try {
      const signedUser = service.signToken(req.user);
      res.status(200).json(signedUser);
    } catch (error) {
      next(error);
    }
  }
);

router.get("/github", passport.authenticate("github"));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/login",
    session: false,
  }),
  (req, res) => {
    const signedUser = service.signToken(req.user, {
      accessToken: req.user.accessToken,
      refreshToken: req.user.refreshToken,
    });
    res.status(200).json(signedUser);
  }
);

router.post("/recovery",
  validatorHandler(recoverySchema, "body"),
  async (req, res, next) => {
    try {
      const { email } = req.body;
      const info = await service.sendRecovery(email);
      res.status(200).json({
        status: "Sent",
        messageId: info.messageId,
      });
    } catch (error) {
      next(error);
    }
  });

router.post("/change-password",
  validatorHandler(changePasswordSchema, "body"),
  async (req, res, next) => {
    try {
      const { token, newPassword } = req.body;
      const response = await service.changePassword(token, newPassword);
      res.status(200).json({
        response,
      });
    } catch (error) {
      next(error);
    }
  });

module.exports = router;

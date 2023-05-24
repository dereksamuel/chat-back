const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const { authConfig } = require("../config/config");

const router = express.Router();

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  async (req, res, next) => {
    try {
      const payload = {
        sub: req.user.id, // the identifier of this token
        role: req.user.role
      };
      const token = jwt.sign(payload, authConfig.jwtKey);

      res.status(200).json({
        token,
        user: req.user
      });
    } catch (error) {
      next(error);
    }
  }
);

router.get("/github", passport.authenticate("github"));

router.get("/github/callback", passport.authenticate("github", { failureRedirect: "/login", session: false }), (req, res) => {
  const payload = {
    sub: req.user.id, // the identifier of this token
    role: req.user.role,
    accessToken: req.user.accessToken,
    refreshToken: req.user.refreshToken
  };

  const token = jwt.sign(payload, authConfig.jwtKey);

  res.status(200).json({
    token,
    user: req.user
  });
});

module.exports = router;

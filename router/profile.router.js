const express = require("express");
const passport = require("passport");

const User = require("../services/user.services");

const router = express.Router();
const userService = new User();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const user = await userService.getById(req.user.sub);
      delete user.dataValues.password;
      delete user.dataValues.recoveryToken;
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

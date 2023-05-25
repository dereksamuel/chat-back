const { Strategy } = require("passport-github");
const { authConfig } = require("../../../config/config");

const Auth = require("../../../services/auth.services");
const service = new Auth();
const options = {
  clientID: authConfig.github.clientID,
  clientSecret: authConfig.github.clientSecret,
  callbackURL: "http://localhost:3060/api/v1/auth/github/callback"
};

const GitHubStrategy = new Strategy(options, async (accessToken, refreshToken, profile, cb) => {
  const user = await service.upgradeUser(profile);

  return cb(null, {
    user,
    accessToken,
    refreshToken
  });
});

module.exports = GitHubStrategy;

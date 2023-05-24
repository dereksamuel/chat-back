const { Strategy } = require("passport-github");
const { authConfig } = require("../../../config/config");

const User = require("../../../services/user.services");
const service = new User();
const options = {
  clientID: authConfig.github.clientID,
  clientSecret: authConfig.github.clientSecret,
  callbackURL: "http://localhost:3060/api/v1/auth/github/callback"
};

const GitHubStrategy = new Strategy(options, async (accessToken, refreshToken, profile, cb) => {
  let user = await service.getByEmail(profile._json.blog);

  if (!user) {
    user = await service.add({
      name: profile.username,
      password: "1234",
      email: profile._json.blog,
      bio: profile._json.bio,
      role: "mortal"
    });
  }

  return cb(null, {
    user,
    accessToken,
    refreshToken
  });
});

module.exports = GitHubStrategy;

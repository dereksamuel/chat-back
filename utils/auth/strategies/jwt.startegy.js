const { Strategy, ExtractJwt } = require("passport-jwt");
const { authConfig } = require("../../../config/config");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: authConfig.jwtKey
};

const JwtStrategy = new Strategy(options, (payload, done) => {
  done(null, payload);
});

module.exports = JwtStrategy;

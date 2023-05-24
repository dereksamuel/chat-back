const passport = require("passport");

const LocalStrategy = require("./strategies/local.strategy");
const JwtStrategy = require("./strategies/jwt.startegy");
const GitHubStrategy = require("./strategies/github.strategy");

passport.use(LocalStrategy);
passport.use(JwtStrategy);
passport.use(GitHubStrategy);

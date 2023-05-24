const boom = require("@hapi/boom");
const { authConfig } = require("../config/config");

function verificationHandler(req, res, next) {
  const apiKey = req.headers["api"];

  if (apiKey === authConfig.apiKey) {
    next();
  } else {
    next(boom.unauthorized());
  }
}

function checkRoles(...roles) {
  return (req, res, next) => {
    if (roles.includes(req.user?.role)) {
      next();
    } else {
      next(boom.forbidden("For this is required a 'master' role"));
    }
  };
}

module.exports = {
  verificationHandler,
  checkRoles
};

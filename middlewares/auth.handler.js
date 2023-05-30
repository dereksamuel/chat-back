const boom = require("@hapi/boom");

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
  checkRoles
};

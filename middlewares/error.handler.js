const { ValidationError } = require("sequelize");

function logErrors (error, req, res, next) {
  // eslint-disable-next-line no-console
  console.error("[ERROR]:", error);
  next(error);
}

function boomErrorHandler (error, req, res, next) {
  if (error.isBoom) {
    const { output } = error;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(error);
  }
}

// eslint-disable-next-line no-unused-vars
function errorHandler (error, req, res, next) {
  res.status(500).json({
    message: error.message,
    stack: error.stack
  });
}

function ormErrorHandler (error, req, res, next) {
  if (error instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: error.message,
      errors: error.errors
    });
  }

  next(error);
}

module.exports = {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler
};

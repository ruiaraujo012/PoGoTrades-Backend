const { INTERNAL_SERVER, NOT_FOUND } = require("./statusCode");

class BaseError extends Error {
  constructor(status, message, isOperational = true) {
    super();
    this.name = this.constructor.name;
    this.status = status;
    this.message = message;
    this.date = new Date();

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BaseError);
    }
  }
}

class APIError extends BaseError {
  constructor(
    status = INTERNAL_SERVER,
    message = "Internal server error",
    isOperational = true
  ) {
    super(status, message, isOperational);
  }
}

class NotFoundError extends BaseError {
  constructor(status = NOT_FOUND, message = "Not found", isOperational = true) {
    super(status, message, isOperational);
  }
}

module.exports = {
  BaseError,
  APIError,
  NotFoundError,
};

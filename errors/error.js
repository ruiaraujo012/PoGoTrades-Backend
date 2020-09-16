const { INTERNAL_SERVER, NOT_FOUND } = require("./statusCode");

class BaseError extends Error {
  constructor(status, message, isOperational = true) {
    super();
    this.name = this.constructor.name;
    this.status = status;
    this.message = message;
    this.isOperational = isOperational;
    this.date = new Date();

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BaseError);
    }
  }
}

class BadRequest extends BaseError {
  constructor(
    status = NOT_FOUND,
    message = "Bad request.",
    isOperational = true
  ) {
    super(status, message, isOperational);
  }
}

class Unauthorized extends BaseError {
  constructor(
    status = NOT_FOUND,
    message = "Unauthorized. You must be logged in to make this request.",
    isOperational = true
  ) {
    super(status, message, isOperational);
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

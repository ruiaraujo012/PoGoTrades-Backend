const {
  INTERNAL_SERVER,
  NOT_FOUND,
  NOT_ALLOWED,
  CONFLICT,
} = require("./statusCode");

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
    message = "Bad request. You must change the request before send it again.",
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

class Forbidden extends BaseError {
  constructor(
    status = FORBIDDEN,
    message = "Forbidden.",
    isOperational = true
  ) {
    super(status, message, isOperational);
  }
}

class NotFound extends BaseError {
  constructor(
    status = NOT_FOUND,
    message = "Not found.",
    isOperational = true
  ) {
    super(status, message, isOperational);
  }
}

class NotAllowed extends BaseError {
  constructor(
    status = NOT_ALLOWED,
    message = "Not Allowed.",
    isOperational = true
  ) {
    super(status, message, isOperational);
  }
}

class Conflict extends BaseError {
  constructor(status = CONFLICT, message = "Conflict.", isOperational = true) {
    super(status, message, isOperational);
  }
}

class InternalServer extends BaseError {
  constructor(
    status = INTERNAL_SERVER,
    message = "Internal server error.",
    isOperational = true
  ) {
    super(status, message, isOperational);
  }
}

module.exports = {
  BaseError,
  BadRequest,
  Unauthorized,
  Forbidden,
  NotFound,
  NotAllowed,
  Conflict,
  InternalServer,
};

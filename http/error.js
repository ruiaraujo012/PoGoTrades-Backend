const {
  INTERNAL_SERVER,
  NOT_FOUND,
  NOT_ALLOWED,
  CONFLICT,
  UNAUTHORIZED,
} = require("./statusCode");

class BaseError extends Error {
  constructor(message, status, isOperational = true) {
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
    message = "Bad request. You must change the request before send it again.",
    status = BAD_REQUEST,
    isOperational = true
  ) {
    super(message, status, isOperational);
  }
}

class Unauthorized extends BaseError {
  constructor(
    message = "Unauthorized. You must be logged in to make this request.",
    status = UNAUTHORIZED,
    isOperational = true
  ) {
    super(message, status, isOperational);
  }
}

class Forbidden extends BaseError {
  constructor(
    message = "Forbidden.",
    status = FORBIDDEN,
    isOperational = true
  ) {
    super(message, status, isOperational);
  }
}

class NotFound extends BaseError {
  constructor(
    message = "Not found.",
    status = NOT_FOUND,
    isOperational = true
  ) {
    super(message, status, isOperational);
  }
}

class NotAllowed extends BaseError {
  constructor(
    message = "Not Allowed.",
    status = NOT_ALLOWED,
    isOperational = true
  ) {
    super(message, status, isOperational);
  }
}

class Conflict extends BaseError {
  constructor(message = "Conflict.", status = CONFLICT, isOperational = true) {
    super(message, status, isOperational);
  }
}

class InternalServer extends BaseError {
  constructor(
    message = "Internal server error.",
    status = INTERNAL_SERVER,
    isOperational = true
  ) {
    super(message, status, isOperational);
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

class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    this.name = "ErrorHandler";
    Error.captureStackTrace(this, ErrorHandler);
  }
}

module.exports = {
  ErrorHandler,
};

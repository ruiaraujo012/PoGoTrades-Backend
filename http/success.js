const { OK, CREATED, NO_CONTENT } = require("./statusCode");

class BaseSuccess {
  constructor(message, info = undefined, status = OK) {
    this.success = true;
    this.message = message;
    this.info = info;
    this.status = status;
    this.date = new Date();
  }
}

class SuccessOK extends BaseSuccess {
  constructor(message = "OK", info = undefined, status = OK) {
    super(message, info, status);
  }
}

class SuccessCreated extends BaseSuccess {
  constructor(message = "Created", info = undefined, status = CREATED) {
    super(message, info, status);
  }
}

class SuccessNoContent extends BaseSuccess {
  constructor(message = "No content", info = undefined, status = NO_CONTENT) {
    super(message, info, status);
  }
}

module.exports = {
  SuccessOK,
  SuccessCreated,
  SuccessNoContent,
};

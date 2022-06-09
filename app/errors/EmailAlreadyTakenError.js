const ApplicationError = require('./ApplicationError');

class EmailNotRegisteredError extends ApplicationError {
  constructor(email) {
    super(`${email} this email already created!!`);
  }

  get details() {
    return { email: this.email };
  }
}

module.exports = EmailNotRegisteredError;

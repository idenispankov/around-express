class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 403;
  }
}

module.exports = UnauthorizedError;

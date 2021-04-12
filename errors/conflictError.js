module.exports = (err, req, res, next) => {
  let { statusCode = 500 } = err;
  if (err.name === "ValidationError") statusCode = 400;
  else if (err.name === "MongoError" && err.code === 11000) statusCode = 409;
  else if (err.name === "Error") statusCode = 401;

  const { message = "An error occurred on the server" } = err;

  res.status(statusCode).send({ message });
};

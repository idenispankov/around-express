const jwt = require("jsonwebtoken");
const UnauthorizedError = require("../errors/UnauthorizedError");

const { JWT_SECRET, NODE_ENV } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    next(new UnauthorizedError("Authorization Required"));
    return;
  }

  const token = authorization.replace("Bearer ", "");
  let payload;

  try {
    payload = jwt.verify(
      token,
      NODE_ENV === "production" ? JWT_SECRET : "secret-string"
    );
  } catch (err) {
    next(new UnauthorizedError("Authorization Required"));
  }

  req.user = payload;

  next();
};

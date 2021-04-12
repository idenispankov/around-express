const { JWT_SECRET, NODE_ENV } = process.env;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const NotFoundError = require("../errors/NotFoundError");

// Login Handler
const login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      if (user) {
        res.status(200).send({
          token: jwt.sign(
            { _id: user._id },
            NODE_ENV === "production" ? JWT_SECRET : "secret-string",
            {
              expiresIn: "7d",
            }
          ),
        });
      }
    })
    .catch(next);
};

// Create User Handler
const createUser = (req, res, next) => {
  const { email, password, name, about, avatar } = req.body;
  return bcrypt
    .hash(password, 10)
    .then((hash) => User.create({ email, password: hash, name, about, avatar }))
    .then((user) => {
      res.status(201).send({
        _id: user._id,
        email: user.email,
      });
    })
    .catch(next);
};

// Get All Users
const getUsers = (req, res, next) => {
  return User.find({})
    .then((users) => res.status(200).send(users))
    .catch(next);
};

// Get Current User
const getCurrenUser = (req, res, next) => {
  return User.findById({ _id: req.user._id })
    .then((user) => {
      if (!user) throw new NotFoundError("User not found");
      return res.status(200).send({
        _id: user._id,
        email: user.email,
        name: user.name,
        about: user.about,
        avatar: user.avatar,
      });
    })
    .catch(next);
};

const getSingleUser = (req, res, next) => {
  return User.findById({ _id: req.params.id })
    .then((user) => {
      if (!user) throw new NotFoundError("User not found");
      return res.status(200).send(user);
    })
    .catch(next);
};

const updateUser = (req, res, next) => {
  const { name, about } = req.body;
  return User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    { new: true, runValidators: true }
  )
    .then((user) => {
      if (!user) throw new NotFoundError("User not found");
      res.status(200).send(user);
    })
    .catch(next);
};

function updateAvatar(req, res, next) {
  const { avatar } = req.body;
  return User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    { new: true, runValidators: true }
  )
    .then((user) => {
      if (!user) throw new NotFoundError("User not found");
      res.status(200).send(user);
    })
    .catch(next);
}

module.exports = {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  updateAvatar,
  login,
  getCurrenUser,
};

const User = require("../models/user");
const NOT_FOUND = 404;
const BAD_REQUEST = 400;
const SERVER_ERROR = 500;
const OK = 200;

const getUsers = (req, res) => {
  return User.find({})
    .then((users) => res.status(OK).send(users))
    .catch((err) =>
      res.status(SERVER_ERROR).send({ message: "Unable to find users" })
    );
};

const getSingleUser = (req, res) => {
  return User.findById({ _id: req.params.id })
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === "CastError") {
        return res.status(NOT_FOUND).send({ message: "User ID not found" });
      }
      return res.status(SERVER_ERROR).send({ message: "Server Error" });
    });
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  return User.create({ name, about, avatar }).then((user) =>
    res.status(200).send(user)
  );
  // .catch((err) => res.status(400).send({ message: "Unable to create User" }))
  // .catch((err) => res.status(500).send({ message: "Server Error" }));
};

const updateUser = (req, res) => {
  const { name, about } = req.body;
  return User.findByIdAndUpdate(
    req.params.id,
    { name, about },
    { new: true, runValidators: true }
  )
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: "User Not Exist" });
      }
      res.status(200).send(user);
    })
    .catch((err) => res.status(500).send({ message: "Unable to update User" }));
};

function updateAvatar(req, res, next) {
  const { avatar } = req.body;
  return User.findByIdAndUpdate(
    req.params.id,
    { avatar },
    { new: true, runValidators: true }
  )
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: "User Not Found" });
      }
      res.status(200).send(user);
    })
    .catch((err) =>
      res.status(500).send({ message: "Unable to update avatar" })
    );
}

module.exports = {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  updateAvatar,
};

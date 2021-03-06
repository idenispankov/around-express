const User = require("../models/user");

const getUsers = (req, res) => {
  return User.find({})
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(500).send({ message: "Unable to find users" }));
};

const getSingleUser = (req, res) => {
  return User.findById({ _id: req.params.id })
    .then((user) => res.send(user))
    .catch((err) => res.status(500).send({ message: "User ID not found" }));
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  return User.create({ name, about, avatar })
    .then((user) => res.status(200).send(user))
    .catch((err) => res.status(500).send({ message: "Unable to create User" }));
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
    .catch((err) => res.status(500).send({ message: "Bad Request" }));
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
    .catch((err) => res.status(500).send({ message: "Bar Request" }));
}

module.exports = {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  updateAvatar,
};

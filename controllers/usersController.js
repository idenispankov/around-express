const path = require("path");
const usersData = path.join(__dirname, "..", "data", "users.json");
const { getFileContent } = require("../helpers/getFileContent");
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
    .then((user) => res.send(user))
    .catch((err) => res.status(500).send({ message: "Unable to create User" }));
};

module.exports = {
  getUsers,
  getSingleUser,
  createUser,
};

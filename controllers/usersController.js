const path = require('path');
const usersData = path.join(__dirname, '..', 'data', 'users.json');
const { getFileContent } = require('../helpers/getFileContent');

const getUsers = (req, res) => {
  getFileContent(usersData)
    .then((users) => {
      res.status(200).send(users);
    });
};

const getSingleUser = (req, res) => {
  getFileContent(usersData)
    .then((users) => {
      const user = users.find((user) => user._id === req.params.id);
      if (user) {
        return res.status(200).send(user);
      }
      return res.status(404).send({ message: 'User ID not found' });
    });
};

module.exports = {
  getUsers,
  getSingleUser
};

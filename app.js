const express = require('express');
const path = require('path');
const { PORT = 3000 } = process.env;
const app = express();
const fs = require('fs').promises;
const usersData = path.join(__dirname, 'data', 'users.json');
const cardsData = path.join(__dirname, 'data', 'cards.json');

app.use(express.static(path.join(__dirname, 'public')));

// Get File Content and Read It
const getFileContent = (path) => {
  return fs.readFile(path, { endoding: 'utf-8' })
    .then(JSON.parse)
    .catch((err) => console.log(err));
};

// Get All Users
app.get('/users', (req, res) => {
  getFileContent(usersData)
    .then((users) => {
      res.status(200).send(users);
    });
});


// Get Single User
app.get('/users/:id', (req, res) => {
  getFileContent(usersData)
    .then((users) => {
      const user = users.find((user) => user._id === req.params.id);
      if (user) {
        return res.status(200).send(user);
      }
      return res.status(404).send({ message: 'User ID not found' });
    });
});


// Get All Cards
app.get('/cards', (req, res) => {
  getFileContent(cardsData)
    .then((cards) => {
      res.status(200).send(cards);
    });
});


app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});

const express = require('express');
const path = require('path');
const { PORT = 3000 } = process.env;
const app = express();
const fs = require('fs').promises;

app.use(express.static(path.join(__dirname, 'public')));

const getFileContent = (path) => {
  return fs.readFile(path, { endoding: 'utf-8' })
    .then(JSON.parse)
    .catch((err) => console.log(err));
};

app.get('/users', (req, res) => {

  const usersData = path.join(__dirname, 'data', 'users.json');

  getFileContent(usersData)
    .then((users) => {
      res.send(users);
    });
});

app.get('/cards', (req, res) => {

  const cardsData = path.join(__dirname, 'data', 'cards.json');

  getFileContent(cardsData)
    .then((cards) => {
      res.send(cards);
    });
});

app.get('/cards/:id', (req, res) => {
  res.send('cardsID - response ' + req.params.id);
});

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});

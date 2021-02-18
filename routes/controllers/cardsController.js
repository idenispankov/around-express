const fs = require('fs').promises;
const path = require('path');
const cardsData = path.join(__dirname, '..', '..', 'data', 'cards.json');

// Get File Content and Read It
const getFileContent = (path) => {
  return fs.readFile(path, { encoding: 'utf-8' })
    .then(JSON.parse)
    .catch((err) => console.log(err));
};

const getCards = (req, res) => {
  return getFileContent(cardsData)
    .then((cards) => {
      res.status(200).send(cards);
    });
};

module.exports = { getCards };

const path = require('path');
const cardsData = path.join(__dirname, '..', 'data', 'cards.json');
const { getFileContent } = require('../helpers/getFileContent');

const getCards = (req, res) => {
  return getFileContent(cardsData)
    .then((cards) => {
      res.status(200).send(cards);
    });
};

module.exports = { getCards };

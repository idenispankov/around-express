const path = require("path");
const Card = require("../models/card");
// const cardsData = path.join(__dirname, "..", "data", "cards.json");
// const { getFileContent } = require("../helpers/getFileContent");

const getCards = (req, res) => {
  return Card.find({})
    .then((cards) => res.status(200).send(cards))
    .catch((err) => res.status(500).send({ message: "Unable to find cards" }));
};

const createCard = (req, res) => {
  const { name, link } = req.body;
  return Card.create({
    name,
    link,
    owner: req.user._id,
  })
    .then((card) => res.send(card))
    .catch((err) => res.status(500).send({ message: "Unable to create Card" }));
};

const deleteCard = (req, res) => {
  return Card.findById({ _id: req.params.id })
    .then((card) => {
      if (card.owner._id === req.user.id) {
        Card.findByIdAndDelete({ _id: req.params.id }).then(() => {
          res.status(200).send({ message: "This card has been deleted" });
        });
      } else {
        res.status(403).send({ message: "Not Authorized to delete this card" });
      }
    })
    .catch((err) => res.status(500).send("Server Error - Unable to delete"));
};

module.exports = { getCards, createCard, deleteCard };

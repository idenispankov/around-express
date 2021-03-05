const path = require("path");
const Card = require("../models/card");

const getCards = (req, res) => {
  return Card.find({})
    .then((cards) => res.status(200).send(cards))
    .catch((err) => res.status(404).send({ message: "Unable to find cards" }));
};

const getSingleCard = (req, res) => {
  return Card.find({ _id: req.params.id })
    .then((card) => res.status(200).send(card))
    .catch((err) => res.status(404).send({ message: "Unable to find card" }));
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
  return Card.findByIdAndRemove({ _id: req.params.id })
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: "card not found" });
      } else if (!card.owner._id === req.user.id) {
        res.status(403).send({ message: "Not Authorized to delete this card" });
      } else {
        Card.findByIdAndDelete({ _id: req.params.id }).then(() =>
          res.status(200).send({ message: "Deleted Succesfully" })
        );
      }
    })
    .catch((err) => res.status(500).send({ message: "Server Error" }));
};

module.exports = { getCards, createCard, getSingleCard, deleteCard };

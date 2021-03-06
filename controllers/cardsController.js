const Card = require("../models/card");

const getCards = (req, res) => {
  return Card.find({})
    .then((cards) => res.status(200).send(cards))
    .catch((err) => res.status(404).send({ message: "Unable to find cards" }));
};

const getSingleCard = (req, res) => {
  return Card.find({ _id: req.params.id })
    .then((cards) => {
      if (cards.length > 0) {
        return res.status(200).send(cards[0]);
      }
      return res.status(404).send({ message: "Unable To find a Card" });
    })
    .catch((err) => res.status(500).send({ message: "error" }));
};
//  if(card === [])

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
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: "Unable to find a card" });
      } else if (!card.owner._id === req.user._id) {
        res.status(403).send({ message: "Forbidden!!!" });
      }
      res.status(200).send({ message: "Succesfully Deleted" });
    })
    .catch((err) => res.status(500).send({ message: "Unable to delete card" }));
};

const likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: "Unable to find a card" });
      }
      res.status(200).send(card);
    })
    .catch((err) => res.status(500).send({ message: "Unable to like card" }));
};

const dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: "Unable to find a Card" });
      }
      res.status(200).send(card);
    })
    .catch((err) =>
      res.status(500).send({ message: "Unable to dislike card" })
    );
};

module.exports = {
  getCards,
  createCard,
  getSingleCard,
  deleteCard,
  likeCard,
  dislikeCard,
};

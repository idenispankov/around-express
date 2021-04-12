const Card = require("../models/card");
const User = require("../models/user");
const NotFoundError = require("../errors/NotFoundError");
const UnauthorizedError = require("../errors/UnauthorizedError");

const getCards = (req, res, next) => {
  return Card.find({})
    .then((cards) => res.status(200).send(cards))
    .catch(next);
};

const getSingleCard = (req, res, next) => {
  return Card.findById({ _id: req.params.id })
    .then((card) => {
      if (!card) throw new NotFoundError("Card not found");
      return res.status(200).send(card);
    })
    .catch(next);
};

const createCard = (req, res, next) => {
  Card.create({ ...req.body, owner: req.user._id })
    .then((card) => {
      res.status(201).send(card);
    })
    .catch(next);
};

const deleteCard = (req, res, next) => {
  Card.findById({ _id: req.params.cardId })
    .then((card) => {
      if (!card) {
        throw new NotFoundError("Card not found");
      } else if (!card.owner._id === req.user._id) {
        throw new UnauthorizedError("Forbidden");
      } else {
        Card.findByIdAndDelete({ _id: req.params.cardId }).then(() => {
          res
            .status(200)
            .send({ message: "This Card has been succesfully deleted" });
        });
      }
    })
    .catch(next);
};

const likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .then((card) => {
      if (!card) throw new NotFoundError("Card not found");
      res.status(200).send(card);
    })
    .catch(next);
};

const dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .then((card) => {
      if (!card) throw new NotFoundError("Card not found");
      res.status(200).send(card);
    })
    .catch(next);
};

module.exports = {
  getCards,
  createCard,
  getSingleCard,
  deleteCard,
  likeCard,
  dislikeCard,
};

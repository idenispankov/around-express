const express = require("express");
const { celebrate, Joi } = require("celebrate");

const router = express.Router();
const {
  getCards,
  createCard,
  deleteCard,
  getSingleCard,
  likeCard,
  dislikeCard,
} = require("../controllers/cardsController");

// Get All Cards
router.get("/cards", getCards);

// Get Single Card
router.get(
  "/cards/:cardId",
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().hex().length(24),
    }),
  }),
  getSingleCard
);

// Create Card
router.post(
  "/cards",
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required().min(2).max(30),
      link: Joi.string()
        .uri({ scheme: ["http", "https"] })
        .required(),
    }),
  }),
  createCard
);

// Delete Card
router.delete(
  "/cards/:cardId",
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().hex().length(24),
    }),
  }),
  deleteCard
);

// Like Card
router.put(
  "/cards/:cardId/likes",
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().hex().length(24),
    }),
  }),
  likeCard
);

// Dislike Card
router.delete(
  "/cards/:cardId/likes",
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().hex().length(24),
    }),
  }),
  dislikeCard
);

module.exports = router;

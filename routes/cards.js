const express = require("express");

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
router.get("/cards/:id", getSingleCard);

// Create Card
router.post("/cards", createCard);

// Delete Card
router.delete("/cards/:cardId", deleteCard);

// Like Card
router.put("/cards/:cardId/likes", likeCard);

// Dislike Card
router.delete("/cards/:cardId/likes", dislikeCard);

module.exports = router;

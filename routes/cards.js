const express = require("express");
const router = express.Router();
const {
  getCards,
  createCard,
  deleteCard,
} = require("../controllers/cardsController");

// Get All Cards
router.get("/cards", getCards);

router.post("/cards", createCard);

router.delete("/cards", deleteCard);

module.exports = router;

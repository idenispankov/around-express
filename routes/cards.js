const express = require("express");
const router = express.Router();
const {
  getCards,
  createCard,
  deleteCard,
  getSingleCard,
} = require("../controllers/cardsController");

// Get All Cards
router.get("/cards", getCards);
router.get("/cards/:id", getSingleCard);

router.post("/cards", createCard);

router.delete("/cards/:id", deleteCard);

module.exports = router;

const express = require('express');
const router = express.Router();
const { getCards } = require('./controllers/cardsController');

// Get All Cards
router.get('/cards', getCards);

module.exports = router;

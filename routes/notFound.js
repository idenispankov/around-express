const express = require("express");

const router = express.Router();
const { notFound } = require("../controllers/notFoundController");

// Non Existing page request
router.get("*", notFound);

module.exports = router;

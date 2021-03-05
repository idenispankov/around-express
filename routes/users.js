const express = require("express");
const router = express.Router();
const {
  getUsers,
  getSingleUser,
  createUser,
} = require("../controllers/usersController");

// Get All Users
router.get("/users", getUsers);

// Get Single User
router.get("/users/:id", getSingleUser);

// Create User
router.post("/users", createUser);

module.exports = router;

const express = require("express");

const router = express.Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  updateAvatar,
} = require("../controllers/usersController");

// Get All Users
router.get("/users", getUsers);

// Get Single User
router.get("/users/:id", getSingleUser);

// Create User
router.post("/users", createUser);

// Update User
router.patch("/users/:id", updateUser);

// Update Avavatar
router.patch("/users/:id/avatar", updateAvatar);

module.exports = router;

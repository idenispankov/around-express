const express = require("express");
const { celebrate, Joi } = require("celebrate");

const router = express.Router();
const {
  getUsers,
  getSingleUser,
  updateUser,
  updateAvatar,
  getCurrenUser,
} = require("../controllers/usersController");

// Get All Users
router.get("/users", getUsers);

// GetCurrentUser
router.get("/users/me", getCurrenUser);

// Get Single User
router.get(
  "/users/:id",
  celebrate({
    params: Joi.object().keys({
      id: Joi.string().hex().length(24),
    }),
  }),
  getSingleUser
);

// Update User
router.patch(
  "/users/me",
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required().min(2).max(40),
      about: Joi.string().required().max(200),
    }),
  }),
  updateUser
);

// Update Avatar
router.patch(
  "/users/me/avatar",
  celebrate({
    body: Joi.object().keys({
      avatar: Joi.string()
        .uri({ scheme: ["http", "https"] })
        .required(),
    }),
  }),
  updateAvatar
);

module.exports = router;

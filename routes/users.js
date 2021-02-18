const express = require('express');
const router = express.Router();
const { getUsers, getSingleUser } = require('./controllers/usersController');

// Get All Users
router.get('/users', getUsers);


// Get Single User
router.get('/users/:id', getSingleUser);

module.exports = router;

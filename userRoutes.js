const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define your user routes here
router.post('/register', userController.registerUser);

// Add other user routes if needed

module.exports = router;


// routes/firstDbRoutes.js
const express = require('express');
const router = express.Router();
const firstDbController = require('../controllers/firstDbController');

// Define routes using firstDbController methods
// Define routes
router.post('/create', firstDbController.createUser);
router.get('/:userId', firstDbController.getUserById);
router.put('/:userId/update', firstDbController.updateUser);
router.delete('/:userId/delete', firstDbController.deleteUser);


module.exports = router;

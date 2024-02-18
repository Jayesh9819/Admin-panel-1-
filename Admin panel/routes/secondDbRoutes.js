// routes/secondDbRoutes.js
const express = require('express');
const router = express.Router();
const  generalInfoController= require('../controllers/secondDbController');

// Define routes using secondDbController methods

router.post('/', generalInfoController.create);
router.get('/', generalInfoController.getAll);
router.get('/:id', generalInfoController.getById);
router.put('/:id', generalInfoController.updateById);
router.delete('/:id', generalInfoController.deleteById)


module.exports = router;

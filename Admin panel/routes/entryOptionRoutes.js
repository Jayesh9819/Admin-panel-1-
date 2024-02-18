

const express = require('express');
const router = express.Router();
const entryOptionController = require('../controllers/entryOptionController');

// CRUD routes for EntryOption
router.post('/', entryOptionController.create);
router.get('/', entryOptionController.getAll);
router.get('/:id', entryOptionController.getById);
router.put('/:id', entryOptionController.update);
router.delete('/:id', entryOptionController.delete);

module.exports = router;



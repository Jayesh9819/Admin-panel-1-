

const express = require('express');
const router = express.Router();
const localInformationController = require('../controllers/localInformationController');

// CRUD routes for LocalInformation
router.post('/', localInformationController.create);
router.get('/', localInformationController.getAll);
router.get('/:id', localInformationController.getById);
router.put('/:id', localInformationController.update);
router.delete('/:id', localInformationController.delete);

module.exports = router;

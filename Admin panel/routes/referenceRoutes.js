
const express = require('express');
const router = express.Router();
const referenceController = require('../controllers/referenceController');

router.get('/', referenceController.getAllReferences);
router.post('/', referenceController.createReference);
router.get('/:id', referenceController.getReference);
router.put('/:id', referenceController.updateReference);
router.delete('/:id', referenceController.deleteReference);

module.exports = router;

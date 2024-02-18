const express = require('express');
const router = express.Router();
const billingController = require('../controllers/billingController');

router.post('/', billingController.createBilling);
router.get('/', billingController.getBillings);
router.put('/:id', billingController.updateBilling);
router.delete('/:id', billingController.deleteBilling);

module.exports = router;


const express = require('express');
const router = express.Router();
const billingDetailController = require('../controllers/billingDetailController');

router.get('/', billingDetailController.getAllBillingDetails);
router.post('/', billingDetailController.createBillingDetail);
router.get('/:id', billingDetailController.getBillingDetail);
router.put('/:id', billingDetailController.updateBillingDetail);
router.delete('/:id', billingDetailController.deleteBillingDetail);

module.exports = router;

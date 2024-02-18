const BillingDetail = require('../models/BillingDetail');

// Get all billing details
exports.getAllBillingDetails = async (req, res) => {
  try {
    const billingDetails = await BillingDetail.find();
    res.json(billingDetails);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new billing detail
exports.createBillingDetail = async (req, res) => {
  const billingDetail = new BillingDetail(req.body);
  try {
    const newBillingDetail = await billingDetail.save();
    res.status(201).json(newBillingDetail);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get a specific billing detail
exports.getBillingDetail = async (req, res) => {
  try {
    const billingDetail = await BillingDetail.findById(req.params.id);
    if (!billingDetail) {
      return res.status(404).json({ message: 'Billing detail not found' });
    }
    res.json(billingDetail);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a billing detail
exports.updateBillingDetail = async (req, res) => {
  try {
    const updatedBillingDetail = await BillingDetail.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBillingDetail);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a billing detail
exports.deleteBillingDetail = async (req, res) => {
  try {
    await BillingDetail.findByIdAndDelete(req.params.id);
    res.json({ message: 'Billing detail deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

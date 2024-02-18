const Billing = require('../models/billing');

exports.createBilling = async (req, res) => {
    try {
        const newBilling = await Billing.create(req.body);
        res.status(201).json(newBilling);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getBillings = async (req, res) => {
    try {
        const billings = await Billing.find();
        res.status(200).json(billings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateBilling = async (req, res) => {
    try {
        const updatedBilling = await Billing.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedBilling);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteBilling = async (req, res) => {
    try {
        await Billing.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Billing deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

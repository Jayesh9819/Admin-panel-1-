
const generalInfo = require('../models/secondDb/AnotherModel');

// Controller methods for the second database
exports.create = async (req, res) => {
    try {
        const generalInfo = new GeneralInfo(req.body);
        await generalInfo.save();
        res.status(201).json({ message: 'General information created successfully', data: generalInfo });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all GeneralInfos
exports.getAll = async (req, res) => {
    try {
        const generalInfos = await GeneralInfo.find();
        res.json(generalInfos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get GeneralInfo by ID
exports.getById = async (req, res) => {
    try {
        const generalInfo = await GeneralInfo.findById(req.params.id);
        if (!generalInfo) {
            return res.status(404).json({ message: 'General information not found' });
        }
        res.json(generalInfo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update GeneralInfo by ID
exports.updateById = async (req, res) => {
    try {
        const generalInfo = await GeneralInfo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!generalInfo) {
            return res.status(404).json({ message: 'General information not found' });
        }
        res.json({ message: 'General information updated successfully', data: generalInfo });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete GeneralInfo by ID
exports.deleteById = async (req, res) => {
    try {
        const generalInfo = await GeneralInfo.findByIdAndDelete(req.params.id);
        if (!generalInfo) {
            return res.status(404).json({ message: 'General information not found' });
        }
        res.json({ message: 'General information deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
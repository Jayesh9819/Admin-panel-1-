

const LocalInformation = require('../models/localInformationModel');

// Create LocalInformation
exports.create = async (req, res) => {
  try {
    const localInformation = await LocalInformation.create(req.body);
    res.json(localInformation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all LocalInformation
exports.getAll = async (req, res) => {
  try {
    const localInformations = await LocalInformation.find();
    res.json(localInformations);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get LocalInformation by ID
exports.getById = async (req, res) => {
  try {
    const localInformation = await LocalInformation.findById(req.params.id);
    if (!localInformation) throw new Error('LocalInformation not found');
    res.json(localInformation);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

// Update LocalInformation
exports.update = async (req, res) => {
  try {
    const localInformation = await LocalInformation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!localInformation) throw new Error('LocalInformation not found');
    res.json(localInformation);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

// Delete LocalInformation
exports.delete = async (req, res) => {
  try {
    const localInformation = await LocalInformation.findByIdAndDelete(req.params.id);
    if (!localInformation) throw new Error('LocalInformation not found');
    res.json({ message: 'LocalInformation deleted successfully' });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

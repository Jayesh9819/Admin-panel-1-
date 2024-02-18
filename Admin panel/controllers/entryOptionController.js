

const EntryOption = require('../models/entryOptionModel');

// Create EntryOption
exports.create = async (req, res) => {
  try {
    const entryOption = await EntryOption.create(req.body);
    res.json(entryOption);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all EntryOptions
exports.getAll = async (req, res) => {
  try {
    const entryOptions = await EntryOption.find();
    res.json(entryOptions);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get EntryOption by ID
exports.getById = async (req, res) => {
  try {
    const entryOption = await EntryOption.findById(req.params.id);
    if (!entryOption) throw new Error('EntryOption not found');
    res.json(entryOption);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

// Update EntryOption
exports.update = async (req, res) => {
  try {
    const entryOption = await EntryOption.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!entryOption) throw new Error('EntryOption not found');
    res.json(entryOption);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

// Delete EntryOption
exports.delete = async (req, res) => {
  try {
    const entryOption = await EntryOption.findByIdAndDelete(req.params.id);
    if (!entryOption) throw new Error('EntryOption not found');
    res.json({ message: 'EntryOption deleted successfully' });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

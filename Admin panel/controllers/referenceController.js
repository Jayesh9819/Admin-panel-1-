const Reference = require('../models/Reference');

// Get all references
exports.getAllReferences = async (req, res) => {
  try {
    const references = await Reference.find();
    res.json(references);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new reference
exports.createReference = async (req, res) => {
  const reference = new Reference(req.body);
  try {
    const newReference = await reference.save();
    res.status(201).json(newReference);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get a specific reference
exports.getReference = async (req, res) => {
  try {
    const reference = await Reference.findById(req.params.id);
    if (!reference) {
      return res.status(404).json({ message: 'Reference not found' });
    }
    res.json(reference);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a reference
exports.updateReference = async (req, res) => {
  try {
    const updatedReference = await Reference.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedReference);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a reference
exports.deleteReference = async (req, res) => {
  try {
    await Reference.findByIdAndDelete(req.params.id);
    res.json({ message: 'Reference deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

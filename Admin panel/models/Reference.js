
const mongoose = require('mongoose');

const referenceSchema = new mongoose.Schema({
  referenceGroup: String,
  displayCaption1: String,
  displayCaption2: String,
  reference1Format: String,
  reference2Format: String,
  selectBoxes: [String],
});

module.exports = mongoose.model('Reference', referenceSchema);

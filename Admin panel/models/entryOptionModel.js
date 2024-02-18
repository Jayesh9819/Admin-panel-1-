

const mongoose = require('mongoose');

const entryOptionSchema = new mongoose.Schema({
  defaultServiceType: String,
  defaultOrderType: String,
  defaultImageFileConversion: String,
  displayPriority: Number,
  selectBoxes: [String],
  freeLocationScanOnPickup: Boolean,
  freeLocationScanOnDelivery: Boolean,
  serviceTypeCaption: String,
  csrReminder: String,
  defaultMileageUnit: String
});

module.exports = mongoose.model('EntryOption', entryOptionSchema);

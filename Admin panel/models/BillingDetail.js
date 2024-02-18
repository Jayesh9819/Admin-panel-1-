
const mongoose = require('mongoose');

const billingDetailSchema = new mongoose.Schema({
  billingGroup: String,
  displayCaption: String,
  selectBoxes: [String],
});

module.exports = mongoose.model('BillingDetail', billingDetailSchema);

// models/secondDb/AnotherModel.js
const mongoose = require('mongoose');
const GeneralInfoSchema = new mongoose.Schema({
  business_unit: {
      type: String
  },
  customer_type: {
      type: String
  },
  customer_source: {
      type: String
  },
  user_field_1: {
      type: String
  },
  user_field_2: {
      type: String
  },
  ensenda_courier_id: {
      type: String
  },
  ensenda_merchant: {
      type: String
  },
  ensenda_url: {
      type: String
  },
  customer_since: {
      type: Date
  },
  last_order: {
      type: Date
  },
  first_order: {
      type: Date
  },
  first_entered: {
      type: Date
  },
  first_entered_by: {
      type: String
  },
  last_updated: {
      type: Date
  },
  last_updated_by: {
      type: String
  },
  display_during_text_signature_collection: {
      type: Boolean
  },
  driver_notes: {
      type: String
  },
  route_stop_user_field_caption: {
      type: [String] // Array of strings for 7 fields
  }
});

module.exports = mongoose.model('GeneralInfo', GeneralInfoSchema);
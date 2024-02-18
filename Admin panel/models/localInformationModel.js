

const mongoose = require('mongoose');

const localInformationSchema = new mongoose.Schema({
  contactTitle: String,
  originCaption: String,
  originRemarks: String,
  destinationCaption: String,
  destinationRemarks: String,
  routeComments: String
});

module.exports = mongoose.model('LocalInformation', localInformationSchema);

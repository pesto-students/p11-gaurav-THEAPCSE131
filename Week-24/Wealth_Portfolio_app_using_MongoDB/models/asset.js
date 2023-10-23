const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
  type: String,
  description: String,
  value: Number
});

const Asset = mongoose.model('Asset', assetSchema);

module.exports = Asset;

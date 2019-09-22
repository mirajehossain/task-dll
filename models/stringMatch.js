const mongoose = require('mongoose');

const { Schema } = mongoose;

const StringMatchingSchema = new Schema({
  strA: {
    type: String,
  },

  strB: {
    type: String,
  },

}, { versionKey: false });

module.exports = {
  StringMatchingModel: mongoose.model('dataList', StringMatchingSchema),
};

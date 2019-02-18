const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
  productID: { type: Number, required: true },
  rating: { type: Number, required: true, default: 0 },
  dateWritten: { type: Date, default: Date.now() },
  verifiedBuy: { type: Boolean, default: false },
  recommend: { type: Boolean, default: false },
  featured: { type: Boolean, default: false },
  topContributor: { type: Boolean, default: false },
  helpful: { type: Number, default: 0 },
  name: { type: String, required: true },
  age: { type: Number },
  fitRating: { type: Number },
  lengthRating: { type: Number },
  qualityRating: { type: Number },
  chestSize: { type: Number },
  waistSize: { type: Number },
  hipSize: { type: Number },
  location: { type: String },
  size: { type: String },
  gender: { type: String },
  height: { type: String },
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = {
  Review,
};

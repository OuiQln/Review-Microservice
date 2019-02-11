const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
  productID: { type: Number, required: true },
  name: { type: String, required: true },
  rating: { type: Number, required: true, default: 0 },
  fitRating: { type: Number, required: true, default: 0 },
  lengthRating: { type: Number, required: true, default: 0 },
  qualityRating: { type: Number, required: true, default: 0 },
  dateWritten: { type: Date, required: true, default: Date.now() },
  verifiedBuy: { type: Boolean, required: true, default: false },
  recommend: { type: Boolean, required: true, default: false },
  featured: { type: Boolean, required: true, default: false },
  topContributor: { type: Boolean, required: true, default: false },
  location: { type: String },
  size: { type: String },
  gender: { type: String },
  chestSize: { type: Number },
  waistSize: { type: Number },
  hipSize: { type: Number },
  height: { type: String },
  helpfulness: { type: Number },
});

const AggregateSchema = mongoose.Schema({
  productID: { type: Number, required: true },
  numberOfReviews: { type: Number, required: true, default: 0 },
  averageRating: { type: Number, required: true, default: 0 },
  averageFitRating: { type: Number, required: true, default: 0 },
  averageLengthRating: { type: Number, required: true, default: 0 },
  averageQualityRating: { type: Number, required: true, default: 0 },
  sizeDistribution: {
    XXS: { type: Number, required: true, default: 0 },
    XS: { type: Number, required: true, default: 0 },
    S: { type: Number, required: true, default: 0 },
    M: { type: Number, required: true, default: 0 },
    L: { type: Number, required: true, default: 0 },
    XL: { type: Number, required: true, default: 0 },
    oneSize: { type: Number, required: true, default: 0 },
    other: { type: Number, required: true, default: 0 },
  },
  ratingDistribution: {
    0: { type: Number, required: true, default: 0 },
    1: { type: Number, required: true, default: 0 },
    2: { type: Number, required: true, default: 0 },
    3: { type: Number, required: true, default: 0 },
    4: { type: Number, required: true, default: 0 },
  },
  ageDistribution: {
    0: { type: Number, required: true, default: 0 },
    1: { type: Number, required: true, default: 0 },
    2: { type: Number, required: true, default: 0 },
    3: { type: Number, required: true, default: 0 },
    4: { type: Number, required: true, default: 0 },
    5: { type: Number, required: true, default: 0 },
    6: { type: Number, required: true, default: 0 },
    7: { type: Number, required: true, default: 0 },
  },
  heightDistribution: {
    0: { type: Number, required: true, default: 0 },
    1: { type: Number, required: true, default: 0 },
    2: { type: Number, required: true, default: 0 },
    3: { type: Number, required: true, default: 0 },
    4: { type: Number, required: true, default: 0 },
    5: { type: Number, required: true, default: 0 },
    6: { type: Number, required: true, default: 0 },
    7: { type: Number, required: true, default: 0 },
    8: { type: Number, required: true, default: 0 },
    9: { type: Number, required: true, default: 0 },
    10: { type: Number, required: true, default: 0 },
    11: { type: Number, required: true, default: 0 },
    12: { type: Number, required: true, default: 0 },
    13: { type: Number, required: true, default: 0 },
    14: { type: Number, required: true, default: 0 },
    15: { type: Number, required: true, default: 0 },
    16: { type: Number, required: true, default: 0 },
    17: { type: Number, required: true, default: 0 },
    18: { type: Number, required: true, default: 0 },
    19: { type: Number, required: true, default: 0 },
    20: { type: Number, required: true, default: 0 },
    21: { type: Number, required: true, default: 0 },
  },
});

const Review = mongoose.model('Review', ReviewSchema);
const Aggregate = mongoose.model('AggregateScore', AggregateSchema);

module.exports = {
  Review,
  Aggregate,
};

const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/reviewOuiQln',
  { useNewUrlParser: true })
  .then(() => { console.log('mongo is connected'); })
  .catch((err) => { console.log(err); });

module.exports = db;

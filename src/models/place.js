const mongoose = require("mongoose");

const Place = mongoose.model("Place", {
  title: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: Number,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = Place;

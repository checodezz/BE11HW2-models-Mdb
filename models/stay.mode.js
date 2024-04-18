const mongoose = require("mongoose");

const StaySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    location: {
      type: String,
    },
    procePerNight: {
      type: Number,
    },
    capacity: {
      type: Number,
    },
    isPetFriendly: {
      type: Boolean,
      default: false,
    },
    hasWifi: {
      type: Boolean,
      default: false,
    },
    hasParking: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

const Stay = mongoose.model("Stay", StaySchema);

module.exports = Stay;

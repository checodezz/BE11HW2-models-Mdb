const mongoose = require("mongoose");

const facebookCardSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  datePosted: {
    type: Date,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  likesCount: {
    type: Number,
    required: true,
  },
  commentsCount: {
    type: Number,
    required: true,
  },
  shareCount: {
    type: Number,
    required: true,
  },
});

const FacebookCard = mongoose.model("FacebookCard", facebookCardSchema);
module.exports = FacebookCard;

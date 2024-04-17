const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    avgRatings: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
    },
    offers: {
      type: [String],
    },
    variant: {
      type: String,
      enum: ["variant1", "Variant 2"],
      required: true,
    },
    wifiConnectivity: {
      type: Boolean,
    },
    productImageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product
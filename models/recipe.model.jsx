const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    srevings: {
      type: Number,
      required: true,
    },
    preppingTime: {
      type: String,
      required: true,
    },
    cookingTime: {
      type: String,
      required: true,
    },
    ingredients: {
      type: [String],
      required: true,
    },
    directions: {
      type: [String],
      required: true,
    },
    notes: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;

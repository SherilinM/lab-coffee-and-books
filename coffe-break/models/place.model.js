const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const placeSchema = new Schema(
  {
    name: {
      type: String
    },

    type: {
      type: String,
      enum: ['coffee shop', 'bookstore']
    },

  },

  {
    timestamps: true
  }
);

const Place = model("Place", placeSchema);

module.exports = Place;

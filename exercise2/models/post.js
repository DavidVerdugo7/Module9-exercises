const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user = require("./user");

const postSchema = new Schema({
  title: { type: String, trim: true, required: true },
  description: { type: String },
  img: [{ type: String }],

  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user", // Cambio en la referencia, debe ser "User" en lugar de "userSchema"
    required: true,
  },
});

//this (post) should be singular.
module.exports = mongoose.model("post", postSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const post = require("./post");
const user = require("./user");

const likeSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  publication_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
    required: true,
  },
});

//this (post) should be singular.

module.exports = mongoose.model("like", likeSchema);

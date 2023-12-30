const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const post = require("./post");
const user = require("./user");

const commentSchema = new Schema({
  content: { type: String, required: true, max: 250 },
  date_posted: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  date_updated: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },

  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  id_publication: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
    required: true,
  },
});

module.exports = mongoose.model("comment", commentSchema); // always singular - e.g, user. Mongoose makes it into plural

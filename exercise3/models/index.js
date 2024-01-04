"use strict";

const User = require("./user"); //require the model
const Post = require("./post");
const Like = require("./like");

async function init() {
  await User.sync(); //sync the model - link the model(table)
  await Post.sync(); //sync the model - link the model(table)
  await Like.sync(); //sync the model - link the model(table)
}

init();

module.exports = {
  User, //export the model
  Post,
  Like,
};

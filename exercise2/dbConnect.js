"use strict";

const Mongoose = require("mongoose");
const uri = process.env.DB_URI || "mongodb://localhost/blogging_app";
// URI: is the addres of databese

//Connect to MongoDB
Mongoose.connect(uri)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("MongoDB Error: " + error.message));

// Get the default connection
const db = Mongoose.connection;

// Bind connection to error event (to get notification of connectionerrors)
db.on("error", console.error.bind(console, "MongoDB connectionerror:"));

exports.Mongoose = Mongoose;

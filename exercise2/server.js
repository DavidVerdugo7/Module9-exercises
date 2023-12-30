const express = require("express");
const app = express();
require("dotenv").config();

// parse requests of content-type -application / json;
app.use(express.json());
let dbConnect = require("./dbConnect");

app.get("/", (req, res) => {
  res.json({ message: "Welcome to myMongoDB blogging app." });
});

//this is to import routes
let userRoutes = require("./routes/userRoutes");
//this in URL
app.use("/api/users", userRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on
port ${PORT}.`);
});
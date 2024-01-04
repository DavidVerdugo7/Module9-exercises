const express = require("express");
const app = express();
require("dotenv").config();

// parse requests of content-type -application / json;
app.use(express.json());

const dbConnect = require("./dbConnect");

app.get("/", (req, res) => {
  res.json({ message: "Welcome to MYSQL blogging app exercise 3." });
});

//this is to import routes

const userRoutes = require("./Routes/userRoutes");
const postRoutes = require("./Routes/postRoutes");
const likeRoutes = require("./Routes/likeRoutes");

//this in URL
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/likes", likeRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on
port ${PORT}.`);
});

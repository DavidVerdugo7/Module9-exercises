const express = require("express");
const app = express();
require("dotenv").config();

// parse requests of content-type -application / json;
app.use(express.json());

const dbConnect = require("./dbConnect");

app.get("/", (req, res) => {
  res.json({ message: "Welcome to myMongoDB blogging app exercise 2." });
});

//this is to import routes
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");
const likeRoutes = require("./routes/likeRoutes");
//this in URL
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on
port ${PORT}.`);
});

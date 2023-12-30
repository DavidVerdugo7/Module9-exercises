const express = require("express");
const router = express.Router();
const Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.userController.fetchAllUsers(res);
});

// //to GET an User
// router.get("/:id", (req, res) => {
//   Controllers.userController.getUserById(req.params.id, res);
// });

router.post("/create", (req, res) => {
  Controllers.userController.createNewUser(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.userController.updateUser(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});

module.exports = router;

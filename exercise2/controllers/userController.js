"use strict";

const Models = require("../models"); //matches index.js

const fetchAllUsers = (res) => {
  Models.user
    .find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};
//GET an User
// const getUserById = (id, res) => {
//   Models.user
//     .findById(id)
//     .then((user) => {
//       if (!user) {
//         return res.status(404).send({ result: 404, message: "User not found" });
//       }
//       res.send({ result: 200, data: user });
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).send({ result: 500, error: err.message });
//     });
// };

//creates a new user using JSON data POST in request body
//POST
const createNewUser = (userData, res) => {
  console.log(userData);
  const newUser = new Models.user(userData);
  newUser
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

// PUT
const updateUser = (req, res) => {
  const { id } = req.params;
  const newData = req.body;

  console.log("New data received:", newData);

  Models.user
    .findByIdAndUpdate(id, newData, { new: true })
    .then((updatedUser) => {
      if (!updatedUser) {
        return res.status(404).send({ result: 404, message: "User not found" });
      }
      res.send({ result: 200, data: updatedUser });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};
//DELETE workign
const deleteUser = (req, res) => {
  const { id } = req.params;

  Models.user
    .findByIdAndDelete(id)
    .then(() => {
      res.send({ result: 200, message: "User deleted successfully" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

module.exports = {
  fetchAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
  // getUserById,
};

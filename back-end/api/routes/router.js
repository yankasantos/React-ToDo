const express = require("express");
const routes = express.Router();

const UsersController = require("../controllers/UserController");


routes.get("/user", UsersController.index);


module.exports = routes;
const express = require("express");
const routes = express.Router();

const UsersController = require("../controllers/UserController");
const TasksController = require("../controllers/TaskController");

routes.get("/user", UsersController.index);

routes.get("/task", TasksController.index);
routes.get("/task/:id", TasksController.showItem);
routes.post("/task", TasksController.createItem);

module.exports = routes;
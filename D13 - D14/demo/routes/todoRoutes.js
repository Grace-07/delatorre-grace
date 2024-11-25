const express = require("express");
const TodoController = require("../controllers/todoController");

const routes = express.Router();

routes.get("/", TodoController.getAllTodos);
routes.post("/", TodoController.createTodo);
routes.get("/:id", TodoController.getTodoById);
routes.put("/:id", TodoController.updateTodo);
routes.delete("/:id", TodoController.deleteTodo);

module.exports = routes;

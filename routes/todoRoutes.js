const express = require("express");
const router = express.Router();

const Controllers = require("../controllers");

// Get all todos
// allow for userId query
router.get("/", Controllers.todoController.getTodos);

// Get one todo
router.get("/:todoId", Controllers.todoController.getOneTodo);

// Toggle completed
router.patch("/:todoId/completed", Controllers.todoController.toggleCompleted);

// Delete todo
router.delete("/:todoId", Controllers.todoController.deleteTodo);

// Update todo
router.put("/:todoId", Controllers.todoController.updateTodo);

module.exports = router;

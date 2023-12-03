const express = require("express");
const router = express.Router();

const Controllers = require("../controllers");

// Get all users
router.get("/", Controllers.userController.getUsers);

// Get one user
router.get("/:userId", Controllers.userController.getOneUser);

// Create new user
router.post("/create_user", Controllers.userController.createUser);

// Delete user
router.delete("/:userId", Controllers.userController.deleteUser);

// Update user
router.put("/:userId", Controllers.userController.updateUser);

// Create new post
router.post("/:userId/create_post", Controllers.postController.createPost);

// Get user posts
router.get("/:userId/posts", Controllers.postController.getPosts);

// Create new todo
router.post("/:userId/create_todo", Controllers.todoController.createTodo);

// Get user todos
router.get("/:userId/todos", Controllers.todoController.getTodos);

// Create new album
router.post("/:userId/create_album", Controllers.albumController.createAlbum);

// Get user albums
router.get("/:userId/albums", Controllers.albumController.getAlbums);

module.exports = router;

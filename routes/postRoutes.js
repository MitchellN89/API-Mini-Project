const express = require("express");
const router = express.Router();

const Controllers = require("../controllers");

// Get all posts
// allow for userId query
router.get("/", Controllers.postController.getPosts);

// Get one post
router.get("/:postId", Controllers.postController.getOnePost);

// Delete post
router.delete("/:postId", Controllers.postController.deletePost);

// Update post
router.put("/:postId", Controllers.postController.updatePost);

// Create new comment
router.post(
  "/:postId/create_comment",
  Controllers.commentController.createComment
);

// Get post comments
router.get("/:postId/comments", Controllers.commentController.getComments);

module.exports = router;

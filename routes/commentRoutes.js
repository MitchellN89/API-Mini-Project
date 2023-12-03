const express = require("express");
const router = express.Router();

const Controllers = require("../controllers");

// Get all comments
// allow for postId query
router.get("/", Controllers.commentController.getComments);

// Get ONE comment
router.get("/:commentId", Controllers.commentController.getOneComment);

// Delete comment
router.delete("/:commentId", Controllers.commentController.deleteComment);

// Update comment
router.put("/:commentId", Controllers.commentController.updateComment);

module.exports = router;

const express = require("express");
const router = express.Router();

const Controllers = require("../controllers");

// Get all photos
// allow for userId and/or albumId query
router.get("/", Controllers.photoController.getPhotos);

// Get one photo
router.get("/:photoId", Controllers.photoController.getOnePhoto);

// Delete photo
router.delete("/:photoId", Controllers.photoController.deletePhoto);

// Update photo
router.put("/:photoId", Controllers.photoController.updatePhoto);

module.exports = router;

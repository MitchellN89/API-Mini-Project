const express = require("express");
const router = express.Router();

const Controllers = require("../controllers");

// Get all albums
// Allow for userId query
router.get("/", Controllers.albumController.getAlbums);

// Get one album
router.get("/:albumId", Controllers.albumController.getOneAlbum);

// Delete album
router.delete("/:albumId", Controllers.albumController.deleteAlbum);

// Update album
router.put("/:albumId", Controllers.albumController.updatePost);

// Create new photo
router.post("/:albumId/create_photo", Controllers.photoController.createPhoto);

// Get album photos
router.get("/:albumId/photos", Controllers.photoController.getPhotos);

module.exports = router;

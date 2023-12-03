const express = require("express");
const router = express.Router();

const Controllers = require("../controllers");

router.post("/", (req, res) => {
  Controllers.setupController.resetDatabase(req, res);
});

module.exports = router;

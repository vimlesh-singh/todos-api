const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).send([{ title: "Welcome to todo api" }]);
});

module.exports = router;

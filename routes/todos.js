const express = require("express");
const router = express.Router();
const todos = require("../dummy-data/todos");

router.get("/", async function (req, res, next) {
  try {
    res.status(200).send(todos);
  } catch (error) {
    console.log(req.body, error);
    res.status(500).send(`bad request`);
  }
});

module.exports = router;

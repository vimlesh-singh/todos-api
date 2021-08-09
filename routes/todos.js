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

router.post("/", async function (req, res, next) {
  try {
    const task =
      req.body.task || req.body.task.trim() ? req.body.task.trim() : "";
    if (!task) return res.status(403).send(`task can't be empty`);
    if (task === "") return res.status(403).send(`task can't be empty`);
    if (todos.filter(t => t.task === task).length > 0)
      return res.status(403).send(`task already exist`);
    const todo = { id: todos.length + 1, task, isCompleted: false };
    todos.unshift(todo);
    res.status(201).send(todos);
  } catch (error) {
    console.log(req.body, error);
    res.status(500).send(`bad request`);
  }
});

module.exports = router;

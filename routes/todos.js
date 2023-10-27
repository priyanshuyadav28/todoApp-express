const express = require("express");
const router = express.Router();

// import the controller methods
const { createTodo } = require("../controllers/createTodo");
const { getTodo, getTodoById } = require("../controllers/getTodo");

// routes
router.post("/createTodo", createTodo);
router.get("/getAllTodo", getTodo);
router.get("/getTodoById/:id", getTodoById);

// export the router
module.exports = router;

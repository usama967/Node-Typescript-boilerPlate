"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post("/todo", (req, res, next) => {
    const body = req.body;
    const NewTodo = {
        id: new Date().toISOString(),
        text: body.text,
    };
    todos.push(NewTodo);
    res.status(201).json({ message: "saved" });
});
router.put("/todo/:todoId", (req, res, next) => {
    const params = req.params;
    const tId = params.todoId;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === tId);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
        return res.status(200).json({ message: "Updated", todos: todos });
    }
    res.status(200).json({ message: "could not find" });
});
router.delete("/todo/:todoId", (req, res, next) => {
    const params = req.params;
    todos = todos.filter((todoItem) => todoItem.id !== params.todoId);
    res.status(200).json({ message: "deleted", todos: todos });
});
exports.default = router;

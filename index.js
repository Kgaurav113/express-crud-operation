//question no 1

const express = require("express");
const todos = require("./todos.js");

const app = express();

app.use(express.json());

const products = require("./todos.js");
app.use(express.json());

app.post("/todos", (req, res) => {
  const newTodo = {
    id: products.length + 1,
    name: req.body.name,
  };
  products.push(newTodo);
  res.json(newTodo);
});
app.get("/todos", (req, res) => {
  res.json(products);
});
app.get("/todos/:todoid", (req, res) => {
  const id = Number(req.params.productid);
  const product = products.find((todo) => todo.id === id);

  if (!tood) {
    return res.send("task is not found");
  }
  res.json(todo);
});
app.use(express.json());

app.put("/todos/:todoid", (req, res) => {
  const id = Number(req.params.todoid);
  const index = products.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return res.send("task is not found");
  }
  const updatedtask = {
    id: todos[index].id,
    name: req.body.name,
  };
  products[index] = updatedtask;
  res.send("task is updated");
});
app.use(express.json()); // parse json body content

app.delete("/todos/:todoid", (req, res) => {
  const id = Number(req.params.todoid);
  const index = products.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return res.status(404).send("task is not found");
  }
  todos.splice(index, 1);
  res.json(" deleted");
});
app.listen(7000, () => {
  console.log("server is listening on port 7000");
});

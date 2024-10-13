const express = require("express");
const pizza = require("../../controllers/pizza/pizzactrls");
const orderRoute = express.Router();

orderRoute.get("/pizza", pizza);
orderRoute.get("/burger", (req, res) => {
  res.send("Welcome to our Pizza Ordering Service!");
});
orderRoute.get("/taccos", (req, res) => {
  res.send("Welcome to our Pizza Ordering Service!");
});
orderRoute.get("/food", (req, res) => {
  res.send("Welcome to our Pizza Ordering Service!");
});
orderRoute.get("/colddrinks", (req, res) => {
  res.send("Welcome to our Pizza Ordering Service!");
});
orderRoute.get("/shakes", (req, res) => {
  res.send("Welcome to our Pizza Ordering Service!");
});
orderRoute.get("/vegitables", (req, res) => {
  res.send("Welcome to our Pizza Ordering Service!");
});
orderRoute.get("/dal", (req, res) => {
  res.send("Welcome to our Pizza Ordering Service!");
});
orderRoute.get("/rice", (req, res) => {
  res.send("Welcome to our Pizza Ordering Service!");
});
orderRoute.get("/chapati", (req, res) => {
  res.send("Welcome to our Pizza Ordering Service!");
});

module.exports = orderRoute;

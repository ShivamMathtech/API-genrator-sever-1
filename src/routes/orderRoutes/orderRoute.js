const express = require("express");
const pizza = require("../../controllers/pizza/pizzactrls");
const burgersCtrl = require("../../controllers/burger/burgerCtrls");
const friesCtrls = require("../../controllers/fries/friesCtrls");
const noodlesCtrl = require("../../controllers/noodles/noodlesCtrls");
const chowmeenCtrls = require("../../controllers/chowmeen/chowmeenCtrsl");
const maggiCtrls = require("../../controllers/maggiee/maggiCtrls");
const paneerCtrls = require("../../controllers/paneer/paneerCtrls");
const cakeCtrls = require("../../controllers/cake/cakeCtrls");
const orderRoute = express.Router();

orderRoute.get("/pizza", pizza);
orderRoute.get("/burger", burgersCtrl);
orderRoute.get("/fries", friesCtrls);
orderRoute.get("/noodles", noodlesCtrl);
orderRoute.get("/chowmeen", chowmeenCtrls);
orderRoute.get("/maggiee", maggiCtrls);
orderRoute.get("/paneer", paneerCtrls);
orderRoute.get("/cakes", cakeCtrls);
orderRoute.get("/rice", (req, res) => {
  res.send("Welcome to our Pizza Ordering Service!");
});
orderRoute.get("/chapati", (req, res) => {
  res.send("Welcome to our Pizza Ordering Service!");
});

module.exports = orderRoute;

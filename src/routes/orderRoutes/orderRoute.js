const express = require("express");
const pizza = require("../../controllers/pizza/pizzactrls");
const burgersCtrl = require("../../controllers/burger/burgerCtrls");
const friesCtrls = require("../../controllers/fries/friesCtrls");
const noodlesCtrl = require("../../controllers/noodles/noodlesCtrls");
const chowmeenCtrls = require("../../controllers/chowmeen/chowmeenCtrsl");
const maggiCtrls = require("../../controllers/maggiee/maggiCtrls");
const paneerCtrls = require("../../controllers/paneer/paneerCtrls");
const cakeCtrls = require("../../controllers/cake/cakeCtrls");
const shakeCtrls = require("../../controllers/shakes/shakesCtrls");
const beerCtrls = require("../../controllers/beers/beerCtrls");
const winsCtrle = require("../../controllers/wines/winesCtrls");
const orderRoute = express.Router();

orderRoute.get("/pizza", pizza);
orderRoute.get("/burger", burgersCtrl);
orderRoute.get("/fries", friesCtrls);
orderRoute.get("/noodles", noodlesCtrl);
orderRoute.get("/chowmeen", chowmeenCtrls);
orderRoute.get("/maggiee", maggiCtrls);
orderRoute.get("/paneer", paneerCtrls);
orderRoute.get("/cakes", cakeCtrls);
orderRoute.get("/shake", shakeCtrls);
orderRoute.get("/beers", beerCtrls);
orderRoute.get("/wines", winsCtrle);

module.exports = orderRoute;

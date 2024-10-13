const express = require("express");
const orderRoute = require("./routes/orderRoutes/orderRoute");
const app = express();
require("dotenv").config();
// Middleware to parse JSON requests
app.use("/orders", orderRoute);
const Port = process.env.PORT || 3000;
app.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
});

const express = require("express");
const app = express();
require("dotenv").config();
// Middleware to parse JSON requests

const Port = process.env.PORT || 3000;
app.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
});

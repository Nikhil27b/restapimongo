const express = require("express");
require("./db/connection");
const Student = require("./models/students");
const route = require("./router/route");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(route);

app.listen(PORT, () => {
  console.log("server listen");
});

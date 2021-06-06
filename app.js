const express = require("express");
const app = express();

const router = require("./router");

require("dotenv").config();
const express_port = process.env.PORT || 4000;
const express_host = process.env.HOST || "localhost";

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(router);

app.listen(express_port, express_host, () => {
  console.log(`Server listen on "http://${express_host}:${express_port}"`);
})

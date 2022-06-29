const express = require("express");
const app = express();
const port = 3000;

app.get("/health_check", (req, res) => {
  res.json({ status: "ok", version: require("../package.json")["version"] });
});

app.get("/hello_world", (req, res) => {
  res.json({ message: "Hello world" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

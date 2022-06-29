const express = require("express");
const app = express();
const port = 3000;

app.get("/health_check", (req, res) => {
  res.json({ status: "ok", version: require("../package.json")["version"] });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

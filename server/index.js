const express = require("express");
const app = express();
app.use("/", (req, res) => {
  res.send("server run");
});
app.listen(5000, console.log("5000"));

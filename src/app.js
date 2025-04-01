const express = require("express");
const app = express();

app.get(/ab?c$/, (req, res) => {
  res.send({ firstname: "Ashwini", lastname: "Sirpa" });
});
app.listen(4001, () => {
  console.log("App is listening on 4001..");
});

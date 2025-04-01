const express = require("express");
const app = express();
// /ab?c, /ab+c, /ab*c, patterns - /a(bc)+d //
app.get("/ab(c?)d", (req, res, next) => {
  res.send({ firstname: "Ashwini", lastname: "Sirpa" });
});
app.get("/abc", (req, res) => {
  console.log(req.query);
  res.send({ firstname: "Ashwini", lastname: "Sirpa" });
});

app.get("/abc/:id", (req, res) => {
  console.log(req.params);
  res.send({ firstname: "Ashwini", lastname: "Sirpa" });
});
app.listen(4001, () => {
  console.log("App is listening on 4001..");
});

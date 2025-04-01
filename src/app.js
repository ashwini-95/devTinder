const express = require("express");
const app = express();

//these are request handlers
app.use("/", (req, res) => {
  res.send("Welcome to DevTinder app - Tinder for devs");
});
app.use("/first", (req, res) => {
  res.send("first api");
});

app.use("/second", (req, res) => {
  res.send("second api");
});
app.listen(4001, () => {
  console.log("App is listening on 4001..");
});

const express = require("express");
const app = express();

//these are request handlers
app.get("/user", (req, res) => {
  res.send("This is a GET Call");
});
app.post("/user", (req, res) => {
  res.send("POST - user added successfully");
});
app.delete("/user/1", (req, res) => {
  res.send("Delete - Deleted successfully");
});
app.use("/", (req, res) => {
  res.send("Welcom Dev Tinders!!");
});
app.listen(4001, () => {
  console.log("App is listening on 4001..");
});

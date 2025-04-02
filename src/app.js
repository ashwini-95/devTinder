const express = require("express");
const app = express();
const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.get("/user/data", userAuth, (req, res, next) => {
  res.send("sent all user data");
});
app.post("/user/login", (req, res) => {
  res.send("loggedin successfully");
});
app.get("/admin/getAllData", (req, res) => {
  res.send("sent all data");
});
app.delete("/admin/deleteuser", (req, res) => {
  res.send("deleted user");
});
app.listen(4001, () => {
  console.log("App is listening on 4001..");
});

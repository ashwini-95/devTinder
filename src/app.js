const express = require("express");
const app = express();

app.use(
  "/user",
  (req, res, next) => {
    console.log("Route handler 1!");
    // res.send("Route Handler!");
    next();
    res.send("Route Handler!");
  },
  (req, res) => {
    console.log("Route handler 2!!");
    res.send("Route Handler!!");
  }
);
app.listen(4001, () => {
  console.log("App is listening on 4001..");
});

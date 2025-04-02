const express = require("express");
const app = express();
const { adminAuth, userAuth } = require("./middlewares/auth");

app.get("/getalldata", (req, res) => {
  try {
    throw new Error("asfsdfsdf");
    res.send("data sent!!");
  } catch (error) {
    res.status(500).send("some Error occured");
  }
});
//prefer try catch instead of this
app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Unexpected Error");
  }
});
app.listen(4001, () => {
  console.log("App is listening on 4001..");
});

const express = require("express");
const { connectDB } = require("./config/database");
const { User } = require("./models/user");
const app = express();

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "John",
    lastName: "Kerl",
    emailId: "johnkerl@gmail.com",
    password: "john@123",
  });
  try {
    await user.save();
    res.send("user added succesfully");
  } catch (error) {
    res.status(400).send("Error in adding user to the database");
  }
});

connectDB()
  .then(() => {
    console.log("Database connected succesfully!!!");
    app.listen(4001, () => {
      console.log("App is listening on 4001..!!");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!, Please try again");
  });

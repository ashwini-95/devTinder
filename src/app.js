const express = require("express");
const { connectDB } = require("./config/database");
const { User } = require("./models/user");
const app = express();

app.use(express.json());
app.post("/signup", async (req, res) => {
  //creating an instance of user model
  // const user = new User({
  //   firstName: "Yashu",
  //   lastName: "Dubb",
  //   emailId: "yashu@dubb.com",
  //   password: "john@123",
  // });
  try {
    console.log(req.body);
    const user = new User(req.body);
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

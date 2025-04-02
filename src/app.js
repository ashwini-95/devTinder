const express = require("express");
const { connectDB } = require("./config/database");
const { User } = require("./models/user");
const app = express();

app.use(express.json());
app.post("/signup", async (req, res) => {
  //creating an instance of user model
  try {
    console.log(req.body);
    const user = new User(req.body);
    await user.save();
    res.send("user added succesfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});
//get feed of all users
app.get("/feed", async (req, res) => {
  try {
    const feed = await User.find();
    res.send(feed);
  } catch (error) {
    res.status(400).send("Error in getting users data");
  }
});
// get user by email
app.get("/user", async (req, res) => {
  try {
    const userEmail = req.body.email;
    const user = await User.find({ emailId: userEmail });
    if (user.length > 0) {
      res.send(user);
    } else {
      res.status(404).send("user not found");
    }
  } catch (error) {
    res.status(400).send("some error occured");
  }
});

//delete user by id
app.delete("/user", async (req, res) => {
  try {
    const userId = req.body.userId;
    const deleted = await User.findByIdAndDelete({ _id: userId });
    res.send("user deleted successfully");
  } catch (error) {
    res.status(400).send("some error occured");
  }
});
app.patch("/user", async (req, res) => {
  try {
    const userId = req.body.userId;
    const data = req.body;
    const newUser = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
    });
    console.log(newUser);
    res.send("user updated successfully");
  } catch (error) {
    res.status(400).send("some error occured");
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

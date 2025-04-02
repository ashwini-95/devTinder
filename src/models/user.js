const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, minLength: 3, maxLength: 30 },
    lastName: { type: String },
    emailId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      maxLength: 50,
      validate(value) {
        if (!validator.isEmail(value))
          throw new Error("Invalid Email ID: " + value);
      },
    },
    password: { type: String, required: true, minLength: 6 },
    age: { type: Number, min: 18 },
    gender: { type: String, enum: ["female", "male"] },
    about: { type: String, default: "Profile Description" },
    photoUrl: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ADefault_pfp.jpg&psig=AOvVaw0_r_KOvHT322JsQxpSLa2q&ust=1743685759162000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMjE-uO1uYwDFQAAAAAdAAAAABAX",
    },
    skills: [String],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = { User };

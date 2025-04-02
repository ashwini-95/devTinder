const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://ashwinisirpa95:BMJKjMz9jsJZfted@cluster0.5anxrju.mongodb.net/devTinder"
  );
};

module.exports = {
  connectDB,
};

const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(
      process.env.DB_URI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => {
        console.log("Databse connected successfully.");
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDatabase;

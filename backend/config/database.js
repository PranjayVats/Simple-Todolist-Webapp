const mongoose = require("mongoose");

const connectDatabase = async () => {
  mongoose.connect(
    process.env.DB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Databse connected.");
    }
  );
};

module.exports = connectDatabase;

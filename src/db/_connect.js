const mongoose = require("mongoose");

const dbURI = process.env.DB_URI;
const dbConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

const connect = async () => {
  try {
    await mongoose.connect(dbURI, dbConfig);
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    //Exits process with failure
    process.exit(1);
  }
};

module.exports = connect;

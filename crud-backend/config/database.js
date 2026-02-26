const mongoose = require("mongoose");
/**
 * @author Imtiaz Adar
 * @email imtiazadarofficial@gmail.com
 */
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB HAS BEEN CONNECTED SUCCESSFULLY!!!");
  } catch (error) {
    console.error("MONGODB CONNECTION FAILED: ", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
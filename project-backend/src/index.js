// require('dotenv).config({path: './env'}) // one method to connect dotenv
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

const port = process.env.PORT || 8000;

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("errror", (error) => {
      console.log("ERR: ", error);
      throw error;
    });

    app.listen(port, () => {
      console.log(`Server is running at port: ${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed !!! ", err);
  });















  
/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("errror", (error) => {
      console.log("ERR: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw err;
  }
})();
*/

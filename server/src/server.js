import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";

// Routes Imports
import userRoute from "./routes/user.mjs";

// Db connection
mongoose
  .connect("mongodb://127.0.0.1:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((err) => {
    console.log("DB Connected");
  });

// Express Configs / Middleswares

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use("/api", userRoute);

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});

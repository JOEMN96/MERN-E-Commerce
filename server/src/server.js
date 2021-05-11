import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

// Routes Imports
import userRoute from "./routes/auth.mjs";
import adminRoutes from "./routes/admin/auth.mjs";
import categoriesRoutes from "./routes/categories.mjs";
import ProductsRoutes from "./routes/products.mjs";
import cartRoutes from "./routes/cart.mjs";

// Db connection
mongoose
  .connect("mongodb://127.0.0.1:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useFindAndModify: false,
  })
  .then((err) => {
    console.log("DB Connected");
  });

// For Path native library use

const __dirname = dirname(fileURLToPath(import.meta.url));

// Express Configs / Middleswares

const app = express();
dotenv.config();
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use("/api", userRoute);
app.use("/api", adminRoutes);
app.use("/api", categoriesRoutes);
app.use("/api", ProductsRoutes);
app.use("/api", cartRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});

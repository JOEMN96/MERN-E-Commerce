import express from "express";
import multer from "multer";
import shortid from "shortid";
import {
  isSignedIn,
  verifyAdmin,
  verifyUser,
} from "../middlewares/userRelated";
import { createProduct } from "../controllers/products";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/products/create",
  isSignedIn,
  verifyAdmin,
  upload.array("Productpic"),
  createProduct
);

export default router;

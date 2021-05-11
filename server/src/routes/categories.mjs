import express from "express";
import multer from "multer";
import shortid from "shortid";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { create, getCategory } from "../controllers/categories";
import {
  isSignedIn,
  verifyAdmin,
  verifyUser,
} from "../middlewares/userRelated";

const router = express.Router();
const __dirname = dirname(fileURLToPath(import.meta.url));

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
  "/categories/create", // Route URl
  isSignedIn,
  verifyAdmin,
  upload.single("caregoryImage"),
  create
);
router.get("/categories/getCategories", isSignedIn, getCategory);

export default router;

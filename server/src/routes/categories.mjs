import express from "express";
import { create, getCategory } from "../controllers/categories";
import {
  isSignedIn,
  verifyAdmin,
  verifyUser,
} from "../middlewares/userRelated";

const router = express.Router();

router.post("/categories/create", isSignedIn, verifyAdmin, create);
router.post("/categories/getCategories", isSignedIn, getCategory);

export default router;

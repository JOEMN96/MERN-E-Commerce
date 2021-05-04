import express from "express";
import { create } from "../controllers/categories";

const router = express.Router();

router.post("/categories/create", create);

export default router;

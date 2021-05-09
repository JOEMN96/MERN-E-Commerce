import express from "express";
import { addToCart } from "../controllers/cart";
import { isSignedIn, verifyUser } from "../middlewares/userRelated";

const router = express.Router();

router.post("/cart/addToCart", isSignedIn, verifyUser, addToCart);

export default router;

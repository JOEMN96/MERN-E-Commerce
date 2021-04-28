import express from "express";

//  Controllers
import { signUp, signIn, isSignedIn } from "../controllers/auth.mjs";

const router = express.Router();

router.post("/signIn", signIn);
router.post("/signUp", signUp);

router.post("/profile", isSignedIn, (req, res) => {
  res.json({ msg: "hello" });
});
export default router;

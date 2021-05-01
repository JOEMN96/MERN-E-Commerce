import express from "express";
import { validateSignUp, isValid, validateSignIn } from "../validators/auth";
//  Controllers
import { signUp, signIn, isSignedIn } from "../controllers/auth.mjs";

const router = express.Router();

router.post("/signIn", validateSignIn, isValid, signIn);
router.post("/signUp", validateSignUp, isValid, signUp);

router.post("/profile", isSignedIn, (req, res) => {
  res.json({ msg: "hello" });
});
export default router;

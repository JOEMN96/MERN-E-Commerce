import express from "express";
import { validateSignUp, validateSignIn, isValid } from "../../validators/auth";

//  Controllers
import { signUp, signIn } from "../../controllers/admin/auth";

const router = express.Router();

router.post("/adminSignIn", validateSignIn, isValid, signIn);

router.post("/adminSignUp", validateSignUp, isValid, signUp);

export default router;

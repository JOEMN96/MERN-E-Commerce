import express from "express";

//  Controllers
import { signUp, signIn } from "../../controllers/admin/auth";

const router = express.Router();

router.post("/adminSignIn", signIn);

router.post("/adminSignUp", signUp);

export default router;

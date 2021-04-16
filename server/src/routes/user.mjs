import express from "express";

//  Controllers
import { signUp } from "../controllers/user.mjs";

const router = express.Router();

router.post("/signIn", (req, res) => {
  User.findOne({});
});

router.post("/signUp", signUp);

export default router;

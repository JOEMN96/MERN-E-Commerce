import express from "express";
import User from "../models/user";

const router = express.Router();

router.post("/signIn", (req, res) => {});

router.post("/signUp", (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        message: "user Already Exists ",
      });
    }
    const { firstName, lastName, password, userName } = req.body;
    const _user = new User({
      firstName,
      lastName,
      password,
      userName: Math.random().toString(),
    });

    _user.save((err, data) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          message: "SomeThing Went Wrong",
        });
      }

      if (data) {
        return res.status(200).json({
          user: data,
        });
      }
    });
  });
});

export default router;

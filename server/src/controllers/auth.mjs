import User from "../models/user.mjs";
import jwt from "jsonwebtoken";

const signUp = (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        message: "User Already Exists ",
      });
    }
    const { firstName, lastName, password, userName, email, role } = req.body;
    const _user = new User({
      firstName,
      lastName,
      password,
      email,
      role,
      userName: Math.random().toString(),
    });

    _user.save((err, data) => {
      if (err) {
        return res.status(400).json({
          message: "SomeThing Went Wrong",
        });
      }

      if (data) {
        return res.status(200).json({
          message: "User Created Sucesfully",
        });
      }
    });
  });
};

const signIn = (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (err) res.status(401).json({ err });

    if (user) {
      if (user.authenticate(req.body.password)) {
        const token = jwt.sign(
          { _id: user._id, role: user.role },
          process.env.JWT_SECRET,
          {
            expiresIn: "7day",
          }
        );
        const { firstName, lastName, role, email, fullName, _id } = user;
        res.status(200).json({
          firstName,
          lastName,
          role,
          email,
          fullName,
          token,
          _id,
        });
      }
    } else {
      return res.status(409).json({ message: "Something Went WRONG !" });
    }
  });
};

export { signUp, signIn };

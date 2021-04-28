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
        console.log(err);
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
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "2h",
        });
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

const isSignedIn = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  console.log(process.env.JWT_SECRET);
  const userId = jwt.verify(token, process.env.JWT_SECRET);
  req.user = userId;
  next();
};

export { signUp, signIn, isSignedIn };
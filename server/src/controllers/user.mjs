import User from "../models/user.mjs";

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

export { signUp };

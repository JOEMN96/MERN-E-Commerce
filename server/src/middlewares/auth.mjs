import jwt from "jsonwebtoken";

const isSignedIn = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const userId = jwt.verify(token, process.env.JWT_SECRET);
  req.user = userId;
  next();
};

export { isSignedIn };

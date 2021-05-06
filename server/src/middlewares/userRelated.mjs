import jwt from "jsonwebtoken";

const isSignedIn = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
  } else {
    return res.status(401).send({ error: "You need to be signed In" });
  }
  next();
};

// MiddlewaresFor categories

const verifyAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(406).send({ error: "You are Not an admin" });
  }
  next();
};
const verifyUser = (req, res, next) => {
  if (req.user.role !== "user") {
    return res.status(406).send({ error: "You are Not an User" });
  }
  next();
};

export { isSignedIn, verifyAdmin, verifyUser };

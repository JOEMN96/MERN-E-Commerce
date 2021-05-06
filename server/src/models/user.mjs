import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    userName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      trim: true,
      unique: true,
      lowercase: true,
    },
    hashedPass: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    contactNo: { type: String },
    profilePic: { type: String },
  },
  { timestamps: true }
);

userSchema.virtual("password").set(function (password) {
  // used to perform a operation on instance of user
  this.hashedPass = bcrypt.hashSync(password, 10);
});

userSchema.virtual("fullName").get(function () {
  // used To perform Operation in current instance of the data
  return `${this.firstName} ${this.lastName}`;
});

userSchema.methods = {
  authenticate: function (password) {
    return bcrypt.compareSync(password, this.hashedPass);
    // Returns True or false
  },
};

export default mongoose.model("user", userSchema);

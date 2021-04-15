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
      required: true,
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
      enum: ['user,"admin'],
      default: "admin",
    },
    contactNo: { type: String },
    profilePic: { type: String },
  },
  { timestamps: true }
);

userSchema.virtual("password").set(function (password) {
  this.hashedPass = bcrypt.hashSync(password, 10);
});

userSchema.method = {
  authenticate: function (password) {
    return bcrypt.compareSync(password, this.hashedPass);
    // Returns True or false
  },
};

export default mongoose.model("user", userSchema);

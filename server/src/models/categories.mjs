import mongoose from "mongoose";
const { Schema } = mongoose;

const CategorySchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, unique: true, required: true },
    parentId: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Categories", CategorySchema);

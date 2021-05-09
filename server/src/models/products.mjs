import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    description: { type: String, required: true, trim: true },
    offers: { type: Number },
    quantity: { type: Number, required: true },
    productImages: [{ img: { type: String } }],
    reviews: [
      {
        // Referencing other Collections in Db
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
        review: String,
      },
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
      required: true,
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    updatedAt: Date,
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);

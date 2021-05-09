import Product from "../models/products";
import shortid from "shortid";
import slugify from "slugify";

const createProduct = async (req, res) => {
  let { name, price, description, reviews, category, quantity } = req.body;

  let productImages;
  if (req.files.length > 0) {
    productImages = req.files.map((file) => {
      return {
        img: file.filename,
      };
    });
  }
  const product = new Product({
    name,
    slug: slugify(name),
    price,
    description,
    reviews,
    category,
    productImages,
    quantity,
    createdBy: req.user._id,
  });

  try {
    let _product = await product.save();
    res.status(200).send(_product);
  } catch (error) {
    res.status(400).send({ error });
  }
};

export { createProduct };

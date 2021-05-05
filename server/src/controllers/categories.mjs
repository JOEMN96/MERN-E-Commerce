import CategoryModel from "../models/categories";
import slugify from "slugify";

const create = (req, res) => {
  if (!req.body.name) {
    return res.status(412).send({
      error: "Category name required",
    });
  }

  const category = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };

  if (req.body.parentId) {
    category.parentId = req.body.parentId;
  }

  const categories = new CategoryModel(category);

  categories.save((error, category) => {
    if (error) return res.status(400).send({ error });
    res.status(200).send({
      category,
    });
  });
};

const getCategory = (req, res) => {
  CategoryModel.find({}).exec((error, categories) => {
    if (error) return res.status(404).send({ error });
    res.status(200).send({ categories });
  });
};

export { create, getCategory };

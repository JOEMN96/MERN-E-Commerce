import CategoryModel from "../models/categories";
import slugify from "slugify";

function formatCategories(categories, parentId = null) {
  let categoryList = [];
  let _categories;
  if (parentId == null) {
    _categories = categories.filter((item) => item.parentId == undefined);
  } else {
    _categories = categories.filter((item) => item.parentId == parentId);
  }

  for (let fields of _categories) {
    categoryList.push({
      _id: fields._id,
      name: fields.name,
      slug: fields.slug,
      children: formatCategories(categories, fields._id),
    });
  }

  return categoryList;
}

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
    const formatedCategories = formatCategories(categories);

    res.status(200).send({ categories: formatedCategories });
  });
};

export { create, getCategory };

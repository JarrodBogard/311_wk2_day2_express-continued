const products = require("../data/products");

const list = (req, res) => {
  res.json(products);
};

const show = (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product._id === Number(id));
  res.json(product);
};

const create = (req, res) => {
  const newProduct = {
    _id: products.length + 1,
    ...req.body,
  };
  products.push(newProduct);
  res.json(products);
};

module.exports = {
  list,
  show,
  create,
};

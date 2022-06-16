const comments = require("../data/comments");

const list = (req, res) => {
  res.json(comments);
};

const show = (req, res) => {
  const id = req.params.id;
  const comment = comments.find((comment) => comment._id === Number(id));
  res.json(comment);
};

const create = (req, res) => {
  const newComment = {
    _id: comments.length + 1,
    ...req.body,
  };
  comments.push(newComment);
  res.json(comments);
};

module.exports = {
  list,
  show,
  create,
};

const contacts = require("../data/contacts");

const list = (req, res) => {
  res.json(contacts);
};

const show = (req, res) => {
  const id = req.params.id;
  const contact = contacts.find((contact) => contact._id === Number(id));
  res.json(contact);
};

const create = (req, res) => {
  const newContact = {
    _id: contacts.length + 1,
    ...req.body,
  };
  contacts.push(newContact);
  res.json(contacts);
};

module.exports = {
  list,
  show,
  create,
};

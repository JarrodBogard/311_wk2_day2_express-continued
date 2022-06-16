const vehicles = require("../data/vehicles");

const list = (req, res) => {
  res.json(vehicles);
};

const show = (req, res) => {
  const id = req.params.id;
  const vehicle = vehicles.find((vehicle) => vehicle._id === Number(id));
  res.json(vehicle);
};

const create = (req, res) => {
  const newVehicle = {
    _id: vehicles.length + 1,
    ...req.body,
  };
  vehicles.push(newVehicle);
  res.json(vehicles);
};

module.exports = {
  list,
  show,
  create,
};

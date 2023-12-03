const Models = require("../models");
const ImportLibrary = require("../libraries/importLibrary");

const getUsers = (req, res) => {
  Models.User.findAll().then((data) => {
    res.send(ImportLibrary.prepareForOutput(data));
  });
};

const getOneUser = (req, res) => {
  const userId = req.params.userId;
  Models.User.findOne({ where: { id: userId } })
    .then((data) => {
      res.send(ImportLibrary.prepareForOutput([data])[0]);
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

const createUser = (req, res) => {
  const body = req.body;
  const formattedData = ImportLibrary.prepareForInput([body]);
  console.log("Formatted Data: ", formattedData[0]);
  Models.User.create(formattedData[0])
    .then((data) => {
      res.send(ImportLibrary.prepareForOutput([data])[0]);
    })
    .catch((err) => {
      res.send({ err: err.message });
    });
};

const deleteUser = (req, res) => {
  const userId = req.params.userId;
  Models.User.destroy({ where: { id: userId } })
    .then((data) => {
      res.send({ result: `Deleted ${data} user(s)` });
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

const updateUser = (req, res) => {
  let body = req.body;
  const userId = req.params.userId;
  try {
    body = ImportLibrary.prepareForInput([body])[0];
  } catch (err) {
    res.send({ error: err.message });
  }
  console.log("body: ", body);
  Models.User.update({ ...body, id: userId }, { where: { id: userId } })
    .then((data) => {
      res.send({ result: `Updated ${data} user(s)` });
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

module.exports = { getUsers, getOneUser, createUser, deleteUser, updateUser };

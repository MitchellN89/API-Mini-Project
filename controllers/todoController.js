const { Sequelize } = require("../dbConnect");
const Models = require("../models");

const getTodos = (req, res) => {
  const userId = req.params.userId || req.query.userId || null;
  const conditions = {};

  if (userId) conditions.userId = userId;

  Models.Todo.findAll({ where: conditions })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

const getOneTodo = (req, res) => {
  const todoId = req.params.todoId;
  Models.Todo.findOne({ where: { id: todoId } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

const createTodo = (req, res) => {
  const body = req.body;
  const userId = req.params.userId;
  Models.Todo.create({ ...body, userId })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

const deleteTodo = (req, res) => {
  const todoId = req.params.todoId;
  Models.Todo.destroy({ where: { id: todoId } })
    .then((data) => {
      res.send({ result: `Deleted ${data} todo(s)` });
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

const updateTodo = (req, res) => {
  const body = req.body;
  const todoId = req.params.todoId;
  Models.Todo.update({ ...body, id: todoId }, { where: { id: todoId } })
    .then((data) => {
      res.send({ result: `Updated ${data} todo(s)` });
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

const toggleCompleted = (req, res) => {
  const todoId = req.params.todoId;
  Models.Todo.update(
    { completed: Sequelize.literal("NOT completed") },
    { where: { id: todoId } }
  )
    .then(() => {
      res.send({ result: `Swapped the status of 'completed'` });
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

module.exports = {
  getTodos,
  getOneTodo,
  createTodo,
  deleteTodo,
  updateTodo,
  toggleCompleted,
};

/*

const A = (req, res) => {
    const userId = req.params.userId;
    const body = req.body;
  Models.User.create({...body, userId})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

*/

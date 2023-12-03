const Models = require("../models");

const getPosts = (req, res) => {
  const userId = req.params.userId || req.query.userId || null;
  const conditions = {};

  if (userId) conditions.userId = userId;

  Models.Post.findAll({ where: conditions })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

const getOnePost = (req, res) => {
  const postId = req.params.postId;
  Models.Post.findOne({ where: { id: postId } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

const createPost = (req, res) => {
  const userId = req.params.userId;
  const body = req.body;
  Models.Post.create({ ...body, userId })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

const deletePost = (req, res) => {
  const postId = req.params.postId;
  Models.Post.destroy({ where: { id: postId } })
    .then((data) => {
      res.send({ result: `Deleted ${data} post(s)` });
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

const updatePost = (req, res) => {
  const body = req.body;
  const postId = req.params.postId;
  Models.Post.update({ ...body, id: postId }, { where: { id: postId } })
    .then((data) => {
      res.send({ result: `Updated ${data} post(s)` });
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

module.exports = { getPosts, getOnePost, createPost, deletePost, updatePost };

/*

const A = (req, res) => {
    const body = req.body;
    const userId = req.params.userId;
  Models.User.create({...body, userId})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

*/

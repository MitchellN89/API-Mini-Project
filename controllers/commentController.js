const Models = require("../models");

const getComments = (req, res) => {
  const postId = req.params.postId || req.query.postId || null;
  const conditions = {};

  if (postId) conditions.postId = postId;

  Models.Comment.findAll({ where: conditions })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

const getOneComment = (req, res) => {
  const commentId = req.params.commentId;
  Models.Comment.findOne({ where: { id: commentId } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

const createComment = (req, res) => {
  const body = req.body;
  const postId = req.params.postId;
  Models.Comment.create({ ...body, postId })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

const deleteComment = (req, res) => {
  const commentId = req.params.commentId;
  Models.Comment.destroy({ where: { id: commentId } })
    .then((data) => {
      res.send({ result: `Deleted ${data} comment(s)` });
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

const updateComment = (req, res) => {
  console.log("Made it to updateComment controller");
  const body = req.body;
  const commentId = req.params.commentId;
  Models.Comment.update(
    { ...body, id: commentId },
    { where: { id: commentId } }
  )
    .then((data) => {
      res.send({ result: `Updated ${data} comment(s)` });
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

module.exports = {
  getComments,
  getOneComment,
  createComment,
  deleteComment,
  updateComment,
};

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

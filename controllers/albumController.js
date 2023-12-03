const Models = require("../models");

const getAlbums = (req, res) => {
  const userId = req.params.userId || req.query.userId || null;
  const conditions = {};

  if (userId) conditions.userId = userId;

  Models.Album.findAll({ where: conditions })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

const getOneAlbum = (req, res) => {
  const albumId = req.params.albumId;
  Models.Album.findOne({ where: { id: albumId } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

const createAlbum = (req, res) => {
  const body = req.body;
  const userId = req.params.userId;
  Models.Album.create({ ...body, userId })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

const deleteAlbum = (req, res) => {
  const albumId = req.params.albumId;
  Models.Album.destroy({ where: { id: albumId } })
    .then((data) => {
      res.send({ result: `Deleted ${data} album(s)` });
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

const updatePost = (req, res) => {
  const body = req.body;
  const albumId = req.params.albumId;
  Models.Album.update({ ...body, id: albumId }, { where: { id: albumId } })
    .then((data) => {
      res.send({ result: `Updated ${data} post(s)` });
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

module.exports = {
  getAlbums,
  getOneAlbum,
  createAlbum,
  deleteAlbum,
  updatePost,
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

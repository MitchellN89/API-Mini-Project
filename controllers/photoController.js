const Models = require("../models");

const getPhotos = (req, res) => {
  const userId = req.params.userId || req.query.userId || null;
  const albumId = req.params.albumId || req.query.albumId || null;

  const photoConditions = {};
  const albumConditions = {};

  if (userId) albumConditions.userId = userId;
  if (albumId) photoConditions.albumId = albumId;

  Models.Photo.findAll({
    include: [
      {
        model: Models.Album,
        attributes: ["userId"],
        where: albumConditions,
      },
    ],
    raw: true,
    where: photoConditions,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

const getOnePhoto = (req, res) => {
  const photoId = req.params.photoId;
  Models.Photo.findOne({ where: { id: photoId } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

const createPhoto = (req, res) => {
  const body = req.body;
  const albumId = req.params.albumId;

  Models.Photo.create({ ...body, albumId })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

const deletePhoto = (req, res) => {
  const photoId = req.params.photoId;
  Models.Photo.destroy({ where: { id: photoId } })
    .then((data) => {
      res.send({ result: `Deleted ${data} photo(s)` });
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

const updatePhoto = (req, res) => {
  const body = req.body;
  const photoId = req.params.photoId;
  console.log(photoId);
  Models.Photo.update({ ...body, id: photoId }, { where: { id: photoId } })
    .then((data) => {
      res.send({ result: `Updated ${data} photo(s)` });
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};

module.exports = {
  getPhotos,
  getOnePhoto,
  createPhoto,
  deletePhoto,
  updatePhoto,
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

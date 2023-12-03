const Models = require("../models");
const ImportLibrary = require("../libraries/importLibrary");

let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

const resetDatabase = async (req, res) => {
  try {
    await clearTables();
    await populateDatabase();
    res.send({ result: "Successfully imported from EXT API" });
  } catch (err) {
    res.send({ error: err.message });
  }
};

const clearTables = async () => {
  // unfortunately, Model.Table.destroy is throwing errors relating to foreign keys despite ON DELETE CASCADE being set for all child tables.
  // This is a work around...
  await sequelizeInstance.query("DELETE FROM users;");
  await sequelizeInstance.query("ALTER TABLE users AUTO_INCREMENT = 1;");
  await sequelizeInstance.query("ALTER TABLE posts AUTO_INCREMENT = 1;");
  await sequelizeInstance.query("ALTER TABLE comments AUTO_INCREMENT = 1;");
  await sequelizeInstance.query("ALTER TABLE todos AUTO_INCREMENT = 1;");
  await sequelizeInstance.query("ALTER TABLE albums AUTO_INCREMENT = 1;");
  await sequelizeInstance.query("ALTER TABLE photos AUTO_INCREMENT = 1;");
};

const populateDatabase = async () => {
  await importUsers();
  await importPosts();
  await importTodos();
  await importAlbums();
  await importPhotos();
  await importComments();
};

const importUsers = async () => {
  let users = await Models.ExternalApi.importUsers();
  users = ImportLibrary.prepareForInput(users.data);

  return Models.User.bulkCreate(users);
};

const importPosts = async () => {
  let posts = await Models.ExternalApi.importPosts();
  posts = posts.data;

  return Models.Post.bulkCreate(posts);
};

const importTodos = async () => {
  let todos = await Models.ExternalApi.importTodos();
  todos = todos.data;

  return Models.Todo.bulkCreate(todos);
};

const importAlbums = async () => {
  let albums = await Models.ExternalApi.importAlbums();
  albums = albums.data;

  return Models.Album.bulkCreate(albums);
};

const importPhotos = async () => {
  let photos = await Models.ExternalApi.importPhotos();
  photos = photos.data;

  return Models.Photo.bulkCreate(photos);
};

const importComments = async () => {
  let comments = await Models.ExternalApi.importComments();
  comments = comments.data;

  return Models.Comment.bulkCreate(comments);
};

module.exports = { resetDatabase };

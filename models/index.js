"use strict";
const User = require("./user");
const Post = require("./post");
const Todo = require("./todo");
const Album = require("./album");
const Photo = require("./photo");
const Comment = require("./comment");
const ExternalApi = require("./externalAPI");

User.hasMany(Post, { onDelete: "CASCADE", foreignKey: "userId" });
Post.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Todo, { onDelete: "CASCADE", foreignKey: "userId" });
Todo.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Album, { onDelete: "CASCADE", foreignKey: "userId" });
Album.belongsTo(User, { foreignKey: "userId" });

Album.hasMany(Photo, { onDelete: "CASCADE", foreignKey: "albumId" });
Photo.belongsTo(Album, { foreignKey: "albumId" });

Post.hasMany(Comment, { onDelete: "CASCADE", foreignKey: "postId" });
Comment.belongsTo(Post, { foreignKey: "postId" });

async function init() {
  await User.sync();
  await Post.sync();
  await Todo.sync();
  await Album.sync();
  await Photo.sync();
  await Comment.sync();
}

init();

module.exports = {
  User,
  Post,
  Todo,
  Album,
  Photo,
  Comment,
  ExternalApi,
};

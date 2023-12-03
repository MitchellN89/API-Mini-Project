const axios = require("axios");

const importUsers = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

const importPosts = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

const importTodos = () => {
  return axios.get("https://jsonplaceholder.typicode.com/todos");
};

const importAlbums = () => {
  return axios.get("https://jsonplaceholder.typicode.com/albums");
};

const importPhotos = () => {
  return axios.get("https://jsonplaceholder.typicode.com/photos");
};

const importComments = () => {
  return axios.get("https://jsonplaceholder.typicode.com/comments");
};

module.exports = {
  importUsers,
  importPosts,
  importTodos,
  importAlbums,
  importPhotos,
  importComments,
};

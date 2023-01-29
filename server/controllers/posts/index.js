const getPost = require("./getPost");
const getUserPosts = require("./getUserPosts");
const getFeedPosts = require("./getFeedPosts");
const getPostComments = require("./getPostComments");
const createPost = require("./createPost");
const updatePost = require("./updatePost");
const deletePost = require("./deletePost");

module.exports = {
  getPost,
  getUserPosts,
  getFeedPosts,
  getPostComments,
  createPost,
  updatePost,
  deletePost,
};

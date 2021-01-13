const blog = require('../models/blog.js');

const generalroute = '/blog';
const route = '/blog/:name';

module.exports = (app) =>
  app.get(generalroute, blog.getBlogs)
     .get(route, blog.getBlog)
     .post(route, blog.insertBlog)
     .put(route, blog.updateBlog);

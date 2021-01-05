const category = require('../models/categories.js')

const generalroute = '/categories'
const route = '/category/:name'

module.exports = (app) =>
app.get(generalroute, category.getCategories)
   .get(route, category.getCategory)
   .post(route, category.insertCategory)
   .put(route, category.updateCategory)

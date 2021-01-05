module.exports = (app) => {
require('./blogs.js')(app);
require('./categories.js')(app);
}

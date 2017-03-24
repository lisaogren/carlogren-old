module.exports.start = function (app) {
  app.route('/', require('./views/main'))
  app.route('/open-source', require('./views/open-source'))
  app.route('/about', require('./views/about'))
  app.route('/articles/:id', require('./views/articles'))
}

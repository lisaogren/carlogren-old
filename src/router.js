module.exports = (route) => [
  route('/', require('./views/main')),
  route('/open-source', require('./views/open-source')),
  route('/about', require('./views/about')),
  route('/admin', require('./views/login'))
]

module.exports = (route) => [
  route('/', require('./components/core/main')),
  route('/other', require('./components/core/other'))
]

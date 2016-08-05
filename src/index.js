// Webpack entry-point
const $ = require('jquery')
require('jquery.scrollex')

// Load style entry-point
require('../static/theme/assets/sass/main.scss')

const choo = require('choo')

const app = choo()

// app.model({
//   state: {
//     counter: 0
//   },
//   reducers: {
//     increment: (_, state) => ({ counter: state.counter + 1 })
//   },
//   effects: {},
//   subscriptions: []
// })

const models = require('./models/index')
models.map(model => app.model(model))

app.router(require('./router'))

// Document ready
$(() => {
  $(document.body).hide()

  // Load choo entry-point
  document.body.appendChild(app.start())

  const $header = $('#header')
  const $banner = $('#banner')

  $banner.scrollex({
    bottom: $header.outerHeight(),
    terminate: function () { $header.removeClass('alt') },
    enter: function () { $header.addClass('alt') },
    leave: function () { $header.removeClass('alt') }
  })

  setTimeout(() => $(document.body).fadeIn('slow'), 200)
})

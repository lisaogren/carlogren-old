
// Webpack entry-point
const $ = require('jquery')
require('jquery.scrollex')

// Load style entry-point
require('./theme/assets/sass/main.scss')

// Load choo entry-point
const app = require('../src')
document.body.appendChild(app.start())

$(document.body).hide()

// Document ready
$(() => {
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

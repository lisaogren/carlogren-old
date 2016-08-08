// Dependencies
const $ = require('jquery')
require('jquery.scrollex')

const choo = require('choo')
const responsive = require('./utils/responsive')

// Load style entry-point
require('../static/theme/assets/sass/main.scss')

// Init app
const app = choo()

// Init models
const models = require('./models/index')
models.map(model => app.model(model))

// Init router
app.router(require('./router'))

// Hide body before rendering
$(document.body).hide()

// Render app to body
document.body.appendChild(app.start())

responsive.init()

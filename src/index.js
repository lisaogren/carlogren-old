// Dependencies
const $ = require('jquery')
require('jquery.scrollex')
require('jquery.scrollto')
require('../static/theme/assets/sass/main.scss')

const choo = require('choo')
const responsive = require('./utils/responsive')

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

// Init responsive utils
responsive.init()

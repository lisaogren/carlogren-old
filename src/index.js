// Dependencies
const $ = require('jquery')
const choo = require('choo')

require('jquery.scrollex')

const responsive = require('./utils/responsive')
// const config = require('./config')

require('theme/assets/sass/main.scss')

// Init app
const app = choo()

// Plugins
// if (config.debug) {
//   const log = require('choo-log')
//   app.use(log())
// }

// Init models
const models = require('./models/index')
models.map(model => app.use(model))

// Init router
const router = require('./router')

router.start(app)

// Hide body before rendering
$(document.body).hide()

// Render app to body
const tree = app.start()
document.body.appendChild(tree)

// Init responsive utils
responsive.init()

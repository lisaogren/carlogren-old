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

$(document.body).hide()
document.body.appendChild(app.start())

require('./utils/responsive')

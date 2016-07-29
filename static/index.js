
// Webpack entry-point

// Load style entry-point
require('./theme/assets/sass/main.scss')

// Load choo entry-point
const app = require('../src')
document.body.appendChild(app.start())

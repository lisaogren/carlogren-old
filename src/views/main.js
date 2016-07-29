const html = require('choo/html')

const header = require('../components/header')
const nav = require('../components/nav')
const banner = require('../components/banner')
const sections = require('../components/sections/index')

module.exports = (...args) => {
  // const [state, prev, send] = args

  return html `
    <div id="page-wrapper">
      ${header(...args)}
      ${nav(...args)}
      ${banner(...args)}
      ${sections(...args)}
    </div>
  `
}

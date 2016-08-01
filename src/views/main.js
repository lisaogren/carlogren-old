const html = require('choo/html')

const header = require('../components/header')
const nav = require('../components/nav')
const banner = require('../components/banner')
const sections = require('../components/sections/index')

module.exports = (state, prev, send) => {
  console.log(state)

  return html `
    <div id="page-wrapper">
      ${header(state)}
      ${nav(state)}
      ${banner(state)}
      ${sections(state)}
    </div>
  `
}

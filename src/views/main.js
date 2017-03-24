const delay = require('lodash/delay')
const html = require('choo/html')

const responsive = require('../utils/responsive')

const header = require('../components/header')
// const nav = require('../components/nav')
const banner = require('../components/banner')
const sections = require('../components/sections')
const footer = require('../components/footer')

module.exports = (state, emit) => {
  // Activate header display depending on scroll position
  const applyResponsiveHeaderDelay = 100
  delay(() => responsive.header(), applyResponsiveHeaderDelay)

  // Scroll to top of the page
  // responsive.scrollTop(state, prev)

  return html `
    <div id="page-wrapper">
      ${header({ alt: true })}
      ${banner()}
      ${sections(state)}
      ${footer(state, emit)}
      <a href="/admin">Admin</a>
    </div>
  `
}

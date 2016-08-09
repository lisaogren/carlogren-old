const $ = require('jquery')
const _ = require('lodash')
const html = require('choo/html')
const responsive = require('../utils/responsive')

const header = require('../components/header')
// const nav = require('../components/nav')
const banner = require('../components/banner')
const sections = require('../components/sections')
const footer = require('../components/footer')

module.exports = (state, prev, send) => {
  // Activate header display depending on scroll position
  const applyResponsiveHeaderDelay = 100
  _.delay(() => responsive.header(), applyResponsiveHeaderDelay)

  // Scroll to top of the page
  $(window).scrollTo(0, 'fast')

  return html `
    <div id="page-wrapper">
      ${header({ alt: true })}
      ${banner()}
      ${sections(state)}
      ${footer()}
    </div>
  `
}

const _ = require('lodash')
const html = require('choo/html')
const responsive = require('../utils/responsive')

const header = require('../components/header')
// const nav = require('../components/nav')
const banner = require('../components/banner')
const sections = require('../components/sections/index')
const footer = require('../components/footer')

const contactForm = require('../components/contact-form')

module.exports = (state, prev, send) => {
  const applyHeaderLogicDelay = 100

  _.delay(() => responsive.header(), applyHeaderLogicDelay)

  return html `
    <div id="page-wrapper">
      ${header({ alt: true })}
      ${banner(state)}
      ${sections(state)}
      ${footer(state, { components: [contactForm] })}
    </div>
  `
}

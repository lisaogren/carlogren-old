const _ = require('lodash')
const html = require('choo/html')

const defaultOptions = {
  components: []
}

const renderComponents = (components) => {
  return components.map(component => component())
}

module.exports = (state, options) => {
  options = _.extend({}, defaultOptions, options)

  console.log(options)

  return html `
    <section id="footer">
      ${renderComponents(options.components)}
    </section>
  `
}

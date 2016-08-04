const html = require('choo/html')

const header = require('../components/header')

module.exports = () => {
  return html `
    <div id="page-wrapper">
      ${header()}
      <section id="banner">
        <h1>About</h1>
      </section>
    </div>
  `
}

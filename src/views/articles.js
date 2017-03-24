const html = require('choo/html')

const header = require('../components/header')
const footer = require('../components/footer')

module.exports = (state, emit) => {
  return html `
    <div id="page-wrapper">
      ${header({ alt: false })}

      <section id="wrapper">
        <header>
          <div class="inner">
            <h2></h2>
            <p>My views on Open Source and what applications/libraries I created or contributed to</p>
          </div>
        </header>

        <div class="wrapper">
          <div class="inner">
            <p>
              Open source is the <b>backbone</b> of software development.
              Every application today uses open source libraries as part of their implementation.
              I <span class="icon fa-heart-o" alt="love"></span> open source.
              I have created a few open source libraries and I try to contribute in different ways to existing applications.
            </p>
          </div>
        </div>
      </section>

      ${footer(state, emit)}
    </div>
  `
}

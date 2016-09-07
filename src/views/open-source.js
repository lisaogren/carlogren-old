const html = require('choo/html')
const responsive = require('../utils/responsive')

const header = require('../components/header')
const footer = require('../components/footer')
const article = require('../components/sections/article')

module.exports = (state, prev, send) => {
  // Scroll to top of the page
  responsive.scrollTop(state, prev)

  const { list } = state.libs

  return html `
    <div id="page-wrapper">
      ${header({ alt: false })}

      <div id="wrapper">
        <header>
          <div class="inner">
            <h2>Open Source</h2>
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
            <p>
              <em>Needed: More ranting about open source development...</em>
            </p>

            <h3 class="major">JavaScript Libraries</h3>
            <p>Some of the JavaScript libraries I've published</p>

            <section class="features">
              ${list.map(lib => article(lib))}
            </section>
          </div>
        </div>
      </div>

      ${footer(state, prev, send)}
    </div>
  `
}

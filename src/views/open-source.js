const $ = require('jquery')
const html = require('choo/html')

const header = require('../components/header')
const footer = require('../components/footer')
const article = require('../components/sections/article')

module.exports = (state) => {
  // Scroll to top of the page
  $(window).scrollTo(0, 'fast')

  const libs = state.libs.list

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
              ${libs.map(lib => article(lib))}
            </section>
          </div>
        </div>
      </div>

      ${footer()}
    </div>
  `
}

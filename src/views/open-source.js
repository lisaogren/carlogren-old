const html = require('choo/html')

const header = require('../components/header')
const footer = require('../components/footer')
const contactForm = require('../components/contact-form')

module.exports = (state) => {
  return html `
    <div id="page-wrapper">
      ${header({ alt: false })}

      <div id="wrapper">
        <header>
          <div class="inner">
            <h2>Open Source</h2>
            <p>Phasellus non pulvinar erat. Fusce tincidunt nisl eget ipsum.</p>
          </div>
        </header>

        <div class="wrapper">
          <div class="inner">
            <h3 class="major">Lorem ipsum dolor</h3>
            <p>Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit accumsan cursus. Etiam ut gravida sapien.</p>
            <p>Vestibulum ultrices risus velit, sit amet blandit massa auctor sit amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor mollis id vel diam. Praesent sit amet posuere risus, eu faucibus lectus. Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam. Proin nec commodo, vel scelerisque nisi scelerisque. Suspendisse id quam vel tortor tincidunt suscipit. Nullam auctor orci eu dolor consectetur, interdum ullamcorper ante tincidunt. Mauris felis nec felis elementum varius.</p>
          </div>
        </div>
      </div>

      ${footer(state, { components: [contactForm] })}
    </div>
  `
}

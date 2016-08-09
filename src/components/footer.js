const html = require('choo/html')

const { form, links } = require('./contact')
const copyright = require('./copyright')

module.exports = (state, options) => {
  return html `
    <section id="footer">
      <div class="inner">
        <h2 class="major">Get in touch</h2>
        <p>
          Send me a message or contact me through the listed medias,
          I'll be glad to exchange a few words with you! <i class="icon fa-smile-o"></i>
        </p>
        ${form()}
        ${links()}
        ${copyright()}
      </div>
    </section>
  `
}

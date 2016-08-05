const html = require('choo/html')

module.exports = () => {
  return html `
    <section id="banner">
      <div class="inner">
        <div class="logo">
          <span class="icon fa-rocket"></span>
        </div>
        <h2>
          <em>Hi! I'm</em> Carl Ogren<em>, I'm a web developer \\o/</em>
        </h2>
        <p>
          Currently working as an astronaut @ <a href="https://www.eleven-labs.com/">Eleven Labs</a>.
          Here you can find stuff about me and what I do.
        </p>
      </div>
    </section>
  `
}

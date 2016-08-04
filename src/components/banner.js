const html = require('choo/html')

module.exports = () => {
  return html `
    <section id="banner">
      <div class="inner">
        <div class="logo">
          <span class="icon fa-diamond"></span>
        </div>
        <h2>Carl Ogren</h2>
        <p>
          I'm a web developer \\o/
        </p>
      </div>
    </section>
  `
}

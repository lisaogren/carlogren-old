const html = require('choo/html')

module.exports = () => {
  return html `
    <section id="banner">
      <div class="inner">
        <div class="logo">
          <span class="icon fa-diamond"></span>
        </div>
        <h2>Carl Ogren</h2>
        <p>Another free + fully responsive site template by <a href="http://html5up.net">HTML5 UP</a></p>
      </div>
    </section>
  `
}

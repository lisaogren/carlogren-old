const html = require('choo/html')

module.exports = (state, prev, send) => {
  return html `
    <header id="header" class="alt">
      <h1>
        <a href="/">Carl Ogren</a>
      </h1>
    </header>
  `
}

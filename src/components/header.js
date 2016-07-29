const html = require('choo/html')

module.exports = (state, prev, send) => {
  return html `
    <header id="header">
      <h1>
        <a href="index.html">Carl Ogren</a>
      </h1>
      <nav>
        <a href="#menu">Menu</a>
      </nav>
    </header>
  `
}

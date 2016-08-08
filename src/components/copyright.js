const html = require('choo/html')

module.exports = () => {
  return html `
    <ul class="copyright">
      <li>This site is distributed under the <a href="https://en.wikipedia.org/wiki/Beerware">beer-ware license</a></li>
      <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
    </ul>
  `
}

const html = require('choo/html')

module.exports = (article) => {
  return html `
    <article>
      <a href="#" class="image"><img src="images/pic04.jpg" alt="" /></a>
      <h3 class="major">Sed feugiat lorem</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
      <a href="#" class="special">Learn more</a>
    </article>
  `
}

const html = require('choo/html')

const components = {
  article: require('./article')
}

module.exports = (state) => {
  const list = state.articles.list

  return html `
    <section id="four" class="wrapper alt style1">
      <div class="inner">
        <h2 class="major">Vitae phasellus</h2>
        <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
        <section class="features">
          ${list.map(data => components.article(data))}
        </section>
        <ul class="actions">
          <li><a href="#" class="button">Browse All</a></li>
        </ul>
      </div>
    </section>
  `
}

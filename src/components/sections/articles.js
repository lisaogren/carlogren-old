const html = require('choo/html')

const components = {
  article: require('./article')
}

module.exports = (state) => {
  const list = state.articles.list

  let articles, actions
  const isEmpty = list.length === 0

  if (isEmpty) {
    articles = html `
      <p class="empty">
        I haven't published any articles yet... Guess I'm not so smart after all <i class="icon fa-meh-o"></i>
      </p>
    `
  } else {
    articles = html `
      <section class="features">
        ${list.map(data => components.article(data))}
      </section>
    `
    actions = html `
      <ul class="actions">
        <li><a href="/articles" class="button">Browse All</a></li>
      </ul>
    `
  }

  return html `
    <section id="four" class="wrapper alt style1">
      <div class="inner">
        <h2 class="major">Articles</h2>
        <p>
          Here is the part where I pretend to be smart in some way.
          I try to share my own view of the world.
          Basically, these articles talk about things I've encountered/experienced.
        </p>
        ${articles}
        ${actions}
      </div>
    </section>
  `
}

const html = require('choo/html')

const components = {
  section: require('./section'),
  articles: require('./articles')
}

module.exports = (state, prev, send) => {
  const list = state.sections.list

  return html `
    <section id="wrapper">
      ${list.map(data => components.section(data))}
      ${components.articles(state)}
    </section>
  `
}

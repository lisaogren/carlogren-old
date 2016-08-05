const html = require('choo/html')
// const sanitizeHTML = require('sanitize-html')

module.exports = (item) => {
  const alt = item.id % 2 ? '' : 'alt'

  const description = html `<p></p>`
  description.innerHTML = item.description

  return html `
    <section class="wrapper ${alt} spotlight style${item.id}">
      <div class="inner">
        <a href="${item.path}" class="image">
          <img src="${item.image.src}" alt="${item.image.alt}" />
        </a>
        <div class="content">
          <h2 class="major">${item.title}</h2>
          ${description}
          <a href="${item.path}" class="special">Learn more</a>
        </div>
      </div>
    </section>
  `
}

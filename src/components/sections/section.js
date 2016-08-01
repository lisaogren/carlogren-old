const html = require('choo/html')

module.exports = (item) => {
  const alt = item.id % 2 ? '' : 'alt'

  return html `
    <section class="wrapper ${alt} spotlight style${item.id}">
      <div class="inner">
        <a href="#" class="image"><img src="${item.image}" alt="" /></a>
        <div class="content">
          <h2 class="major">Magna arcu feugiat</h2>
          <p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
          <a href="#" class="special">Learn more</a>
        </div>
      </div>
    </section>
  `
}

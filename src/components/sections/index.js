const html = require('choo/html')

const itemComponent = require('./item')

const list = [
  {
    id: 1,
    title: 'Magna arcu feugiat',
    description: `
      Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante,
      nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu.
      Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.
    `,
    image: 'theme/images/pic01.jpg'
  }, {
    id: 2,
    title: 'Tempus adipiscing',
    description: `
      Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante,
      nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu.
      Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.
    `,
    image: 'theme/images/pic02.jpg'
  }, {
    id: 3,
    title: 'Nullam dignissim',
    description: `
      Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante,
      nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu.
      Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.
    `,
    image: 'theme/images/pic03.jpg'
  }
]

module.exports = () => {
  return html `
    <section id="wrapper">
      ${list.map((item) => itemComponent(item))}
    </section>
  `
}

module.exports = {
  namespace: 'sections',
  state: {
    list: [
      {
        id: 1,
        title: 'Open Source',
        description: `
          Open source is the <b>backbone</b> of software development.
          Every application today uses open source libraries as part of their implementation.
          I <span class="icon fa-heart-o" alt="love"></span> open source.
          I have created a few open source libraries and I try to contribute in different ways to existing applications.
        `,
        image: {
          src: 'theme/images/open-source-logo.png',
          alt: 'Open Source logo'
        },
        path: '/open-source'
      }
      // {
      //   id: 2,
      //   title: 'Tempus adipiscing',
      //   description: `
      //     <p>
      //       Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante,
      //       nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu.
      //       Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.
      //     </p>
      //   `,
      //   image: { src: 'theme/images/pic02.jpg' }
      // },
      // {
      //   id: 3,
      //   title: 'Nullam dignissim',
      //   description: `
      //     <p>
      //       Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante,
      //       nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu.
      //       Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.
      //     </p>
      //   `,
      //   image: { src: 'theme/images/pic03.jpg' }
      // }
    ]
  }
}

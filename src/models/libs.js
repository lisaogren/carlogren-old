module.exports = function (state) {
  // namespace
  state.libs = {};

  // Set default state
  state.libs.list = [
    {
      id: 1,
      title: 'Backbone-Highway',
      description: 'A better router for Backbone applications.',
      image: 'theme/images/backbone-highway.jpg',
      link: 'https://github.com/d4f/backbone-highway'
    },
    {
      id: 2,
      title: 'url-composer',
      description: 'Building dynamic URLs.',
      image: 'theme/images/url-composer.jpg',
      link: 'https://github.com/RasCarlito/url-composer'
    },
    {
      id: 3,
      title: 'generator-fountain-backbone',
      description: 'Rapidly scaffolding Backbone applications using yeoman fountain generator',
      image: 'theme/images/pic05.jpg',
      link: 'https://github.com/RasCarlito/generator-fountain-backbone'
    },
    {
      id: 4,
      title: 'jQuery.HoverScroll',
      description: 'Simple jquery plugin to make a list scrollable by hovering the mouse over it.',
      image: 'theme/images/jquery-hoverscroll.jpg',
      link: 'http://rascarlito.free.fr/hoverscroll/'
    },
    {
      id: 5,
      title: 'jsControl',
      description: 'An old attempt at making a jQuery-like frontend framework.',
      image: 'theme/images/jscontrol.jpg',
      link: 'http://rascarlito.free.fr/jsControl/'
    }
  ]
}

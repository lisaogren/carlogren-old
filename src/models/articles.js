module.exports = function (state, emitter) {
  // namespace
  state.articles = {}

  // Set default state
  state.articles.list = [
    {
      id: 1,
      title: 'Fun functionnal programming with Choo',
      description: 'Bonjour ! je vais vous parler d’un nouveau framework JavaScript qui s’appelle Choo (ou ChooChoo pour les intimes).',
      image: 'theme/images/pic04.jpg',
      link: '/articles/1'
    }, {
      id: 2,
      title: 'WebRTC : La révolution de la communication',
      description: 'Le WebRTC (aka Web Real-Time Communication) apporte la communication en temps réel au Web.',
      image: 'theme/images/pic05.jpg',
      link: '/articles/2'
    }
  ]
}

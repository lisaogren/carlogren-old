const html = require('choo/html')

module.exports = (state, prev, send) => {
  return html `
    <div>
      <h1>Hello world</h1>
      <button onclick=${() => send('increment')}>
        ${state.counter} clicks
      </button>
      <ul>
        <li>
          <a href="/other">Navigate?</a>
        </li>
      </ul>
    </div>
  `
}

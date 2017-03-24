const html = require('choo/html')

module.exports = () => {
  return html `
    <nav id="menu">
      <div class="inner">
        <h2>Menu</h2>
        <ul class="links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="#">Log In</a></li>
          <li><a href="#">Sign Up</a></li>
        </ul>
        <a href="#" class="close">Close</a>
      </div>
    </nav>
  `
}

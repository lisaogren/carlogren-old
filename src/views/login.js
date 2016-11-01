// const _ = require('lodash')
const html = require('choo/html')

const header = require('../components/header')
const copyright = require('../components/copyright')

module.exports = () => {
  return html `
    <div id="page-wrapper">
      ${header({ alt: false })}

      <div id="wrapper">
        <header>
          <div class="inner">
            <h2>Login to admin panel</h2>
            <p>Yes, here is the entrance to the bat cave! But I'm the only one allowed in.</p>
          </div>
        </header>

        <div class="wrapper">
          <div class="inner">
            <form method="post" action="/api/auth">
              <div class="row uniform">
                <div class="6u 12u$(xsmall)">
                  <label for="email">Email</label>
                  <input type="email" name="email" id="email" value="" placeholder="Email adress" />
                </div>
                <div class="6u 12u$(xsmall)">
                  <label for="name">Password</label>
                  <input type="password" name="name" id="name" value="" placeholder="Super secret password" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div id="footer">
        <div class="inner">
          ${copyright()}
        </div>
      </div>
    </div>
  `
}

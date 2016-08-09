const html = require('choo/html')

module.exports = () => {
  return html `
    <form method="post" action="https://formspree.io/carl.ogren@gmail.com">
      <div class="field">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Enter your name" />
      </div>
      <div class="field">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Enter your email so I can reply to you" />
      </div>
      <div class="field">
        <label for="message">Message</label>
        <textarea name="message" id="message" rows="4" placeholder="Why are you writing to me?"></textarea>
      </div>
      <input type="text" name="_gotcha" style="display:none" />
      <ul class="actions">
        <li><input type="submit" value="Send Message" /></li>
      </ul>
    </form>
  `
}

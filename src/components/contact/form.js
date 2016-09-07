const html = require('choo/html')
const debounce = require('lodash/debounce')
const delay = require('lodash/delay')

module.exports = (state, prev, send) => {
  // Extract field validation state
  const { valid } = state.email

  // Define form validation rules
  const validateName = validate(/^[a-zA-Z\u00C0-\u017F -]{1,256}$/)
  const validateEmail = validate(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
  const validateMessage = validate(/.+/)

  // Error messages
  const nameError = error(
    valid.name,
    'Please enter a valid name. It should not contain any punctuation except the hyphen (-) character'
  )
  const emailError = error(valid.email, 'Please enter a valid email address')
  const messageError = error(
    valid.message,
    html `
      <span>
        The message cannot be empty. I do care about the reasons you are contacting me <i class="icon fa-smile-o"></i>
      </span>
    `
  )
  const sendingError = error(
    state.email.error === null,
    state.email.error
  )

  if (state.email.success) {
    resetFields()

    delay(() => {
      send('email:reset')
    }, 10000)
  }

  // Contact form html
  return html `
    <form onsubmit=${sendEmail}>
      <div class="field">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Enter your name" onkeydown=${validateName} onchange=${validateName} />
        ${nameError}
      </div>
      <div class="field">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Enter your email so I can reply to you" onkeydown=${validateEmail} onchange=${validateEmail} />
        ${emailError}
      </div>
      <div class="field">
        <label for="message">Message</label>
        <textarea name="message" id="message" rows="4" placeholder="Why are you writing to me?" onkeydown=${validateMessage} onchange=${validateMessage}></textarea>
        ${messageError}
      </div>
      <ul class="actions">
        <li>
          <button type="submit" ${state.email.sending ? 'disabled' : ''}>
            ${state.email.sending ? 'Sending' : 'Send Message'}
          </button>
        </li>
      </ul>
      <div class="field">
        ${sendingError}
        ${state.email.success ? html `<p><i class="fa fa-check"></i> Email sent successfully. Thank you for contacting me.</p>` : ''}
      </div>
    </form>
  `

  //
  // Helper methods
  //

  function sendEmail (e) {
    e.preventDefault()

    send('email:send', {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    })
  }

  function validate (rule) {
    return debounce((e) => {
      send('email:validate', {
        field: e.target.name,
        value: e.target.value,
        rule
      })
    }, 300)
  }

  function error (isValid, message) {
    if (isValid === false) {
      return html `
        <p class="error">
          <i class="fa fa-times"></i>
          <span>${message}</span>
        </p>
      `
    }

    return ''
  }

  function resetFields () {
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('message').value = ''
  }
}

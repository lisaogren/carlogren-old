const html = require('choo/html')
const delay = require('lodash/delay')

const form = require('utils/form')

module.exports = (state, emit) => {
  // Extract field validation state
  const { valid, values } = state.email

  // Define form validation rules
  const validateName = function (e) {
    emit('email:value', { name: e.target.value })
    form.validate('email:validate', /^[a-zA-Z\u00C0-\u017F -]{1,256}$/, emit)(e)
  }
  const validateEmail = form.validate(
    'email:validate',
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    emit
  )
  const validateMessage = form.validate('email:validate', /.+/, emit)

  // Error messages
  const nameError = form.error(
    valid.name,
    'Please enter a valid name. It should not contain any punctuation except the hyphen (-) character'
  )
  const emailError = form.error(valid.email, 'Please enter a valid email address')
  const messageError = form.error(
    valid.message,
    html `
      <span>
        The message cannot be empty. I do care about the reasons you are contacting me <i class="icon fa-smile-o"></i>
      </span>
    `
  )
  const sendingError = form.error(
    state.email.error === null,
    state.email.error
  )

  if (state.email.success) {
    resetFields()

    delay(() => {
      emit('email:reset')
    }, 10000)
  }

  // Contact form html
  return html `
    <form onsubmit=${sendEmail}>
      <div class="field">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Enter your name" value=${values.name} onkeyup=${validateName} onchange=${validateName} />
        ${nameError}
      </div>
      <div class="field">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Enter your email so I can reply to you" value=${values.email} onkeydown=${validateEmail} onchange=${validateEmail} />
        ${emailError}
      </div>
      <div class="field">
        <label for="message">Message</label>
        <textarea name="message" id="message" rows="4" placeholder="Why are you writing to me?" onkeydown=${validateMessage} onchange=${validateMessage}>${values.message}</textarea>
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

    emit('email:send', {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    })
  }

  function resetFields () {
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('message').value = ''
  }
}

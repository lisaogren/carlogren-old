const config = require('../config')
const http = require('xhr')
const delay = require('lodash/delay')
const extend = require('lodash/extend')

const emailConfig = {
  host: 'https://formspree.io/carl.ogren@gmail.com'
}

const defaultState = {
  valid: {
    name: null,
    email: null,
    message: null
  },
  values: {
    name: '',
    email: '',
    message: ''
  },
  sending: false,
  success: null,
  error: null
}

module.exports = function (state, emitter) {
  // Set default state
  state.email = extend({}, defaultState)

  emitter.on('email:validate', function (data) {
    const { field, value, rule } = data

    state.email.values[field] = value

    const valid = rule.test(value)

    emitter.emit('email:valid', { field, valid })
  })

  emitter.on('email:send', function (data) {
    const { name, email, message } = state.email.valid

    if (!name || !email || !message) {
      emitter.emit('email:error', 'Please fill in all the fields correctly')
      return
    }

    emitter.emit('email:sending', data)

    if (config.debug) {
      console.log('Email would have been sent', data)
      delay(() => emitter.emit('email:sent', data), 2000)
      return
    }

    http.post(emailConfig.host, { json: data }, (err, res, body) => {
      if (err) {
        emitter.emit('email:error', 'The email could not be sent due to a technical error, please try again later.')
        return
      }

      emitter.emit('email:sent', data)
    })
  })

  emitter.on('email:valid', function (data) {
    state.email.valid[data.field] = data.valid
    state.email.error = null

    emitter.emit('render')
  })

  emitter.on('email:value', function (data) {
    state.email.values = extend(state.email.values, data)
  })

  emitter.on('email:sending', function () {
    state.email.sending = true

    emitter.emit('render')
  })

  emitter.on('email:sent', function () {
    state.email.sending = false
    state.email.sucess = true
    state.email.error = null

    emitter.emit('render')
  })

  emitter.on('email:error', function (data) {
    state.email.sending = false
    state.email.sucess = false
    state.email.error = data

    emitter.emit('render')
  })

  emitter.on('email:reset', function () {
    state.email = extend({}, defaultState)

    emitter.emit('render')
  })
}

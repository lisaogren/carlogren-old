const config = require('../config')
const http = require('choo/http')
const delay = require('lodash/delay')

const emailConfig = {
  host: 'https://formspree.io/carl.ogren@gmail.com'
}

module.exports = {
  namespace: 'email',
  state: {
    valid: {
      name: null,
      email: null,
      message: null
    },
    sending: false,
    success: null,
    error: null
  },
  effects: {
    validate: (data, state, send, done) => {
      const { field, value, rule } = data
      const valid = rule.test(value)

      send('email:valid', { field, valid }, done)
    },
    send: (data, state, send, done) => {
      const { name, email, message } = state.valid

      if (!name || !email || !message) {
        send('email:error', 'Please fill in all the fields correctly', done)
        return
      }

      send('email:sending', data, done)

      if (config.debug) {
        console.log('Email would have been sent', data)
        delay(() => send('email:sent', data, done), 2000)
        return
      }

      http.post(emailConfig.host, { json: data }, (err, res, body) => {
        if (err) {
          console.error('Got error sending email request', err, res)
          send('email:error', 'The email could not be sent due to a technical error, please try again later.', done)
          return
        }

        console.log('Yay!', res, body)
        send('email:sent', data, done)
      })
    }
  },
  reducers: {
    valid: (data, state) => {
      state.valid[data.field] = data.valid
      state.error = null
      return state
    },
    sending: (data, state) => ({ sending: true }),
    sent: (data, state) => ({ sending: false, success: true, error: null }),
    error: (data, state) => ({ sending: false, success: false, error: data }),
    reset: (data, state) => ({
      valid: {
        name: null,
        email: null,
        message: null
      },
      sending: false,
      success: null,
      error: null
    })
  }
}

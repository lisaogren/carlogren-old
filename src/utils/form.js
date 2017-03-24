const html = require('choo/html')
const bindAll = require('lodash/bindAll')
const debounce = require('lodash/debounce')

const form = {
  validate (evt, rule, emit) {
    return debounce((e) => {
      emit(evt, { field: e.target.name, value: e.target.value, rule })
    }, 300)
  },

  error (isValid, message) {
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
}

module.exports = bindAll(form)

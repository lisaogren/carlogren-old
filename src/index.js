const choo = require('choo')

const app = choo()

app.model({
  state: {
    counter: 0
  },
  reducers: {
    increment: (_, state) => ({ counter: state.counter + 1 })
  },
  effects: {},
  subscriptions: []
})

app.router(require('./router'))

module.exports = app

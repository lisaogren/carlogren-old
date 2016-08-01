const choo = require('choo')

const app = choo()

// app.model({
//   state: {
//     counter: 0
//   },
//   reducers: {
//     increment: (_, state) => ({ counter: state.counter + 1 })
//   },
//   effects: {},
//   subscriptions: []
// })

app.model(require('./models/sections'))
app.model(require('./models/articles'))

app.router(require('./router'))

module.exports = app

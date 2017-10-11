// const Koa = require('koa')
// const genres = require('./')
// const app = new Koa()

// app.use(genres({ debug: true }))

// app.use(() => {
//   hi()
// })

// app.listen(3000)

const Koa = require('koa')
const genres = require('./')
const app = new Koa()

app.use(genres())

app.use((ctx) => {
  ctx.body = {
    username: 'nswbmw',
    gender: 'male'
  }
})

app.listen(3000)

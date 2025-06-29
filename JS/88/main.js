const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('About Us')
})
app.get('/Contact', (req, res) => {
  res.send('Hello Contact me!')
})
app.get('/Blog/:slug', (req, res) => {
  console.log(req.params)
  console.log(req.query)
  res.send(`Hello ${req.params.slug}!`)
})
// app.get('/Blog/intro-to-js', (req, res) => {
//   res.send('Hello intro-to-js!')
// })
// app.get('/Blog/intro-to-python', (req, res) => {
//   res.send('Hello intro-to-python!')
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

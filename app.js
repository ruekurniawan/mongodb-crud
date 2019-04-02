const express = require('express')
const app = express()
const port = 3000
const route = require('./routes/books')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/books', route)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
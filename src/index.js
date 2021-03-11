const mysql = require('promise-mysql')
const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/db', async function (req, res) {
  var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  })
  .then(function (data) {
    res.send("Connected!")
  })
  .catch(function(error) {
    res.send(error)
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
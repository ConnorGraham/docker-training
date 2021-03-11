const mysql = require('mysql')
const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/db', (req, res) => {
  var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  });
  con.connect()
  res.send("Connected!");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
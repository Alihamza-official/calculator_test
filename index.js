
const express = require('express')
const app = express()
const port = 3000

// const {calculator} = require('./utility');

const {calculator} = require("helloocalculator");

console.log(calculator.add(2, 4)) ;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
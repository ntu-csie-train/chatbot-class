const express = require('express')
const bodyParser = require('body-parser')

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send(`query: ${JSON.stringify(req.query)}`);
})

app.post('/', function (req, res) {
  res.send(`query: ${JSON.stringify(req.query)}, body: ${JSON.stringify(req.body)}`);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
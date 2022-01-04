const express = require('express')
const app = express()
const port = 3000
const readPlayers = require('./middleware/ReadPlayers');
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/C', readPlayers.readAllPlayers)
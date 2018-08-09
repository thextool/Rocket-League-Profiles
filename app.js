const express = require('express')
const app = express()
const dataFile = require('./data/data.json')
const port = parseInt(process.env.PORT || 3000)
const reload = require('reload')

app.set('appData', dataFile)

app.use(express.static('public'))
app.use(require('./routes/index'))
app.use(require('./routes/speakers'))

const server = app.listen(port)
    .on('error',     console.error.bind(console))
    .on('listening', console.log.bind(console, `Listening on http://localhost:${port}`))

reload(server, app)
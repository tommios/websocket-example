const express = require('express'),
    app = express(),
    http = require('http').createServer(app),
    io = require('socket.io')(http)

const host = '127.0.0.1'
const port = 7000

const nmspc1 = io.of('/your-namespace1')
const nmspc2 = io.of('/your-namespace2')

nmspc1.on('connection', socket => {
    console.log(`Client ${socket.id} connected to /your-namespace1`)
})

nmspc2.on('connection', socket => {
    console.log(`Client ${socket.id} connected to /your-namespace2`)
})

app.use(express.static(__dirname))

app.get('/', (req, res) => res.render('index'))

http.listen(port, host, () => console.log(`Server listens http://${host}:${port}`))
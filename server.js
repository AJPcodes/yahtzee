"use strict"

const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const PORT = process.env.PORT || 3000


app.set('view engine', 'jade')

app.use(express.static('client'))

app.get('/', (req, res) => {
  res.render('index')
})

io.on('connection', (socket) => {
  console.log('Socket Connected ==== ');

  socket.on('disconnect', () => {
    console.log('user disconnected => <=');
  });
});

server.listen(PORT, () => console.log(`
   __     __   _     _
 \\ \\   / /  | |   | |
  \\ \\_/ /_ _| |__ | |_ _______  ___
   \\   / _\` | \'_ \\| __|_  / _ \\/ _ \\
    | | (_| | | | | |_ / /  __/  __/
    |_|\\__,_|_| |_|\\__/___\\___|\\___|

  _____           _
 |  __ \\         | |
 | |__) |__  _ __| |_
 |  ___/ _ \\| \'__| __|
 | |  | (_) | |  | |_
 |_|   \\___/|_|   \\__|
${PORT}`))


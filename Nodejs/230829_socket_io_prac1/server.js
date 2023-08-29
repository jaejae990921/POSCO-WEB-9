const http = require('http');
const express = require('express');
const SocketIO = require('socket.io');

const app = express();
const PORT = 8000;

//http 서버
const server = http.createServer(app);
//socket 서버
const io = SocketIO(server);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('client');
});

io.on("connection", (socket) => {
    socket.on("btn", (arg) => {
        console.log('client : ', arg);
        switch (arg) {
            case 'hello':
                socket.emit('backend_message', 'hello : 안녕하세요');
                break;
            case 'study':
                socket.emit('backend_message', 'study : 공부하자');
                break;
            case 'bye':
                socket.emit('backend_message', 'bye : 잘가');
                break;
        }
    })
});

//서버
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
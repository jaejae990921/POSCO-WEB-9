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
    res.render('chat');
});

io.on("connection", (socket) => {
    socket.on("join", (res) => {
        socket.join(res);
        socket.room = res; // 방 이름을 room이라는 속성을 만들어서 저장

        socket.broadcast.to(res).emit('create', '새로운 유저가 입장했습니다.');
    })

    socket.on("message", (res) => {
        socket.broadcast.to(socket.room).emit('chat', res);
    });
});

//서버
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
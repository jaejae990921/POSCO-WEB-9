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

app.get('/chat', (req, res) => {
    res.render('chat');
});

// io.on의 뜻은 socket.io 서버에 이벤트를 등록하겠다는 뜻
// socket은 클라이언트와의 연결을 의미
io.on("connection", (socket) => {
    socket.on("open_message", (arg, cb) => {
        console.log(arg);
        cb(arg);
    });

    // form_message 이벤트를 받으면
    // backend_message 이벤트를 발생시킴
    socket.on("form_message", (arg) => {
        console.log(arg);
        socket.emit("backend_message", arg);
    })

    // ------------------------------

    console.log('조인 전', socket.rooms);
    socket.on("join", (res) => {
        // 채팅방을 생성하는 방법 join(방이름)
        // join은 방을 생성도 하지만, 이미 생성된 방에 들어가는 방법도 됨
        socket.join(res);
        socket.room = res; // 방 이름을 room이라는 속성을 만들어서 저장
        console.log('조인 후', socket.rooms);
        
        // broadcast.to(방이름).emit(이벤트이름, 데이터)
        // 나를 제외한 모든 사람에게 이벤트를 발생시킴(메세지 전달)
        socket.broadcast.to(res).emit('create', '새로운 유저가 입장했습니다.');
        
        const roomInfo = io.sockets.adapter.rooms.get(res); // 방 정보를 가져옴
        console.log("접속자 수 : ", roomInfo.size); // 방에 있는 사람의 수
    })

    socket.on("message", (res) => {
        // io.to(특정방).emit(이벤트이름, 데이터) -> 특정방에 있는 모든 사람에게 이벤트를 발생시킴
        io.to(socket.room).emit('chat', res);
    });

    socket.on('leave', () => {
        socket.leave(socket.room);
        const roomInfo = io.sockets.adapter.rooms.get(socket.room)
        console.log("접속자 수 : ", roomInfo?.size); // ?는 optional chaining 연산자
        // roomInfo가 undefined일 경우 에러가 발생하지 않고 undefined를 반환
    })
});

//서버
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
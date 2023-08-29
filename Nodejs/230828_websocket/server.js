const http = require('http');
const ws = require('ws');
const express = require('express');
const app = express();

// http 서버
const server = http.createServer(app);
// 웹소켓 서버 접속
const wss = new ws.Server({ /* port: PORT */ server });

const PORT = 8000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('client');
});


// 클라이언트들을 담을 배열
const sockets = [];

// 웹소켓 서버 이벤트
// on은 이벤트를 등록하는 메서드
// socket은 접속한 클라이언트
wss.on('connection', (socket) => {
    console.log('클라이언트 연결');
    sockets.push(socket); // 배열에 추가
    
    // 메세지 이벤트
    socket.on('message', (message) => {
        console.log(`클라이언트로부터 받은 메세지 : ${message}`);
        // socket.send(`서버 : ${message}`);
        sockets.forEach( elem => {
            elem.send(`서버 : ${message}`);
        })
    });
    
    // 오류 이벤트
    socket.on('error', (err) => {
        console.log(`에러가 발생했습니다. (에러:${err})`);
    });
    
    // 접속 종료 이벤트
    socket.on('close', () => {
        console.log('클라이언트 접속 종료');
    });
})

// 관례상 맨 아래에 작성
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
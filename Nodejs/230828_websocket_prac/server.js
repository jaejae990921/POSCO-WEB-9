const ws = require('ws');
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('client');
});

const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});


const wss = new ws.Server({ /* port: PORT */ server });
const sockets = [];

wss.on('connection', (socket) => {
    console.log('클라이언트 연결');
    sockets.push(socket); // 배열에 추가

    // wss.clients // 현재 접속중인 클라이언트들의 정보를 가지고 있음
    // ws.CONNECTING : 0 -> 웹소켓이 연결 시도중
    // ws.OPEN : 1 -> 웹소켓이 열린상태
    // ws.CLOSING : 2 -> 웹소켓이 닫히는 중
    // ws.CLOSED : 3 -> 웹소켓이 닫힌 상태
    // socket.readyState // 현재 웹소켓의 클라이언트 상태를 알려줌

    // 메세지 이벤트
    socket.on('message', (message) => {
        // 웹 소켓을 통해 클라이언트와 서버간의 데이터를 주고받을때는 일반적으로 문자열 또는 버퍼형태로 전달됨.
        // 서버가 모두 다른환경이기 때문에 객체를 전달할때는 객체를 일련의 바이트로 변환하는 직렬화 과정이 필요함.
        const msg = JSON.parse(message); // 버퍼 형태로 전달되기 때문에 JSON 형태로 변환
        console.log(msg);

        if (msg.code === '1') {
            socket.send('서버에 접속하신 것을 환영합니다.');
        } else {
            sockets.forEach( elem => {
                elem.send(`${msg.name} : ${msg.msg}`);
            })
        }
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
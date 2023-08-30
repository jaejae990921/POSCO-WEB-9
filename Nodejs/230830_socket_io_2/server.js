const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");

const PORT = 8000;
const app = express();

const server = http.createServer(app);
const io = SocketIO(server);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/:room", (req, res) => {
    const room = req.params.room;
});

// 방에 접속한 유저의 유저이름을 가져오는 함수
function getUsersInRoom(room) {
    const users = [];
    const clients = io.sockets.adapter.rooms.get(room); //해당 방에 접속한 모든 소켓의 id값을 가져옴
    // rooms.get(room)은 해당 방에 접속한 모든 소켓의 id값을 가져옴
    // console.log(clients);
    if (clients) {
        clients.forEach((socketId) => {
            // 해당 방에 접속한 모든 소켓의 id값을 가져와서 해당 소켓의 정보를 가져오고,
            // 해당 소켓의 user(유저이름)값을 배열에 저장
            const userSocket = io.sockets.sockets.get(socketId);
            // sockets.get(socketId)는 해당 소켓의 정보를 가져옴
            // io.sockets.sockets는 접속한 모든 소켓의 정보를 가져옴
            const info = { name: userSocket.user, key: socketId };
            users.push(info);
            // userSocket.user는 해당 소켓의 user(유저이름)값을 가져옴
        });
    }
    return users; // 방에 접속한 모든 유저의 유저이름을 배열로 반환
}
const roomList = [];

io.on("connection", (socket) => {
    //socket!//
    //socket은 접속한 웹페이지, io는 접속해있는 모든 웹페이지
    //웹 페이지가 접속이되면 고유한 id값이 생성됨. socket.id로 확인가능
    //console.log(io.sockets);
    //채팅방 목록 보내기
    socket.emit("roomList", roomList);
    //채팅방 만들기 생성
    socket.on("create", (roomName, userName, cb) => {
        //join(방이름) 해당 방이름으로 없다면 생성. 존재하면 입장
        //socket.rooms에 socket.id값과 방이름 확인가능
        socket.join(roomName);
        //socket은 객체이며 원하는 값을 할당할 수 있음
        socket.room = roomName; // socket.room에 방이름 할당
        socket.user = userName; // socket.user에 유저이름 할당

        //채팅방 목록 갱신
        if (!roomList.includes(roomName)) {
            roomList.push(roomName);
            //갱신된 목록은 전체가 봐야함
            io.emit("roomList", roomList);
        }
        const usersInRoom = getUsersInRoom(roomName); // 방에 접속한 유저의 이름을 저장
        io.to(roomName).emit("userList", usersInRoom); // 해당 방에 접속한 유저의 이름을 전송
        socket.broadcast.to(roomName).emit("newUser", socket.user); // 해당 방에 접속한 유저의 이름을 전송
        cb();
    });

    // 메세지를 보낸 유저와 같은 방에 있는 유저에게 "닉네임 : 메세지" 형식으로 전송
    socket.on("sendMessage", (message) => {
        io.to(socket.room).emit("newMessage", message.message, message.nick);
    });

    socket.on("disconnect", () => {
        if (socket.room) {
            socket.leave(socket.room);
        }
    });

    // 귓속말
    socket.on("whisper", (message) => {
        getUsersInRoom(socket.room).forEach((user) => {
            if (user.name === message.to) {
                io.to(user.key).emit("whisper", message.message, message.nick);
            }
            // io.to(socket.room).emit("whisper", message.message, message.nick, message.to);
        })
        // 본인한테도 보내야함
        io.to(socket.id).emit("whisper", message.message, message.nick);
        // socket.emit("whisper", message.message, message.nick); 도 똑같음
    });
});

server.listen(8000, () => {
    console.log(`http://localhost:${PORT}`);
});
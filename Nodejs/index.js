// const mod = require("./module.js");
// // 키값으로 가져올 수 있음
// const {a} = require("./module.js");

// console.log(mod);
// console.log(mod.a);

// // 키로 값을 가져옴


// ----------------------------------
// const http = require("http");

// const server = http.createServer(function(req, res) { // 요청 응답
//     res.writeHead(200)
//     res.write("<h1>Hello Node!</h1>");
//     res.end("<p>End</p>");
// });

// server.listen(8080, function() {
//     console.log("8080번 포트로 서버 실행");
// });
// ----------------------------------

// const http = require("http");
// const fs = require('fs') // 파일 시스템

const server = http.createServer((req, res) => {
    try {
        const data = fs.readFileSync("./index.html"); // index.html 읽어오기
        res.writeHead(200);
        res.end(data);
    } catch (error) {
        console.log(error);
        res.writeHead(404);
        res.end(error.message);
    }
});

server.listen(8080, function() {
    console.log("8080번 포트로 서버 실행");
});
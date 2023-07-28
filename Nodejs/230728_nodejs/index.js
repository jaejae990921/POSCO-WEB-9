const express = require('express');
// import express from 'express';
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
// ejs를 사용하기 위한 설정
// set은 서버의 속성을 설정
// view engine을 ejs로 사용하겠다는 의미

app.set("views", "./views");
// 뷰 템플릿 파일들이 위치한 디렉토리를 설정
// views 폴더를 사용하겠다는 의미

//--- 정적인 파일 불러오기 ---//
app.use("/public", express.static("./public"));

app.get('/', (req, res) => { // localhost:8000/
    // send() - 클라이언트에 응답 데이터를 보낼 때 사용
    // res.send("Hello Express"); // send는 데이터를 보내는 것
    res.send({result: true, code: 1000, message: "회원가입 성공", data: {name: "심재운"}}); // json 형태로 보내는 것
});

app.get('/kdt9', (req, res) => { // localhost:8000/kdt9
    // res.send("Hello kdt9");

    res.render('test', {name: "Simson"}); // views 폴더 안에 있는 test.ejs를 렌더링
    // render는 html을 렌더링 하는 것
});

app.listen(PORT, () => { // 서버 오픈
    // 서버 체크용도로 사용
    console.log(`http://localhost:${PORT}`)
});
const express = require('express');
const app = express();
const PORT = 8000;

app.set("view engine", "ejs"); // 뷰 엔진을 ejs로 설정
app.set("views", "./views"); // 뷰 파일이 있는 디렉토리를 views로 설정

app.use("/public", express.static("./public")); // 정적파일 디렉토리를 public으로 설정

app.get('/', (req, res) => {
    res.render('prac_1_warm'); // views안에 있는 prac_1_warm.ejs를 렌더링
});

app.listen(PORT, () => { // 서버 오픈
    console.log('서버 열림');
});
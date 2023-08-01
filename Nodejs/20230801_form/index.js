const express = require('express');
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true })); // form data를 받기 위해 사용
app.use(express.json()); // json data를 받기 위해 사용
// view engine
app.set('view engine', 'ejs'); // ejs 엔진으로 설정
app.set('views', './views'); // views 폴더 설정

// router
app.get('/', (req, res) => {
    // console.log(req.body); // post 요청은 다 body에 담김
    res.render('index', {title: "폼 전송 실습"}); // views 폴더 안에 있는 index.ejs 파일을 렌더링
});

app.get('/getForm', (req, res) => {
    console.log(req.query); // get은 query
    res.render('result', {
        title: "GET요청 폼 결과 확인하기",
        userInfo: req.query
    })
});

app.post('/postForm', (req, res) => {
    console.log(req.body); // post는 body
    res.render('result', {
        title: "POST요청 폼 결과 확인하기",
        userInfo: req.body
    })
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});

// action : 어디로 보낼지 (서버 주소)
// name : 폼 이름
// target : _blank 새창에서 열기, _self 현재창에서 열기
// method는 : 어떤 방식으로 보낼지 (get, post)
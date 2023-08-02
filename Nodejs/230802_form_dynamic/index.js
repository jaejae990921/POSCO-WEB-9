const express = require('express');
const app = express();

const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true })); // form 데이터 받기 위함
app.use(express.json()); // json 데이터 받기 위함

// view engine
app.set('view engine', 'ejs'); // 뷰 엔진을 ejs로 설정
app.set('views', './views'); // 뷰 파일을 views 폴더로 설정

// router
app.get('/', (req, res) => {
    res.render('index');
});

// ajax get
app.get('/ajax', (req, res) => {
    console.log('back', req.query);
    res.send(req.query);
});

// ajax post
app.post('/ajax', (req, res) => {
    console.log('back', req.body);
    res.send(req.body);
});

// axios get
app.get('/axios', (req, res) => {
    console.log('back', req.query);
    res.send(req.query);
});

// axios post
app.post('/axios', (req, res) => {
    console.log('back', req.body);
    res.send(req.body);
});

// fetch get
app.get('/fetch', (req, res) => {
    console.log('back', req.query);
    res.send(req.query);
});

// fetch post
app.post('/fetch', (req, res) => {
    console.log('back', req.body);
    res.send(req.body);
});

// server start
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});

// 위에 코드는 거의 고정적으로 사용하는 코드임
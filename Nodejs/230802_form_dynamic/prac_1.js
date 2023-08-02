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
    res.render('prac_1');
});

// ajax get
app.get('/ajax', (req, res) => {
    console.log('back', req.query);
    res.send(req.query);
});

// server start
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});
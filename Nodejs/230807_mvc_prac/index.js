const express = require('express');
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true })); // form 데이터 받기 위함
app.use(express.json()); // json 데이터 받기 위함

// view engine
app.set('view engine', 'ejs'); // 뷰 엔진을 ejs로 설정
app.set('views', './views'); // 뷰 파일을 views 폴더로 설정

app.use('/public', express.static('public'));

const router = require('./routes');

// router
app.use('/', router);

app.use('*', (req, res) => {
    res.render('404');
});

// server start
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});
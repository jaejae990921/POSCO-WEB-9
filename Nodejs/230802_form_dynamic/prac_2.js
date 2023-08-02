const express = require('express');
const app = express();

const PORT = 8000;

const ID = 'posco';
const PW = '1234';

// body-parser
app.use(express.urlencoded({ extended: true })); // form 데이터 받기 위함
app.use(express.json()); // json 데이터 받기 위함

// view engine
app.set('view engine', 'ejs'); // 뷰 엔진을 ejs로 설정
app.set('views', './views'); // 뷰 파일을 views 폴더로 설정

// router
app.get('/', (req, res) => {
    res.render('prac_2');
});

// axios post
app.post('/axios', (req, res) => {
    console.log('back', req.body);
    if (req.body.id === ID && req.body.pw === PW) {
        res.send({ result: '성공' });
    } else {
        res.send({ result: '실패' });
    }
});

// server start
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});
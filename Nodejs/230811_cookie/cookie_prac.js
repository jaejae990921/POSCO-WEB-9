const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.use(cookieParser());

const cookieConfig = {
    httpOnly: true,
    maxAge : 1000 * 60 * 60 * 24, // 쿠키 수명 24시간
}

app.get('/', (req, res) => {
    res.render('cookie_prac');
});

// /cookie로 들어오면 24시간짜리 쿠키 생성
app.post('/cookie', (req, res) => {
    res.cookie('myCookie', 'myValue', cookieConfig);
    res.redirect('/');
});

// 쿠키 여부 확인
app.get('/cookieCheck', (req, res) => {
    const myCookie = req.cookies.myCookie;

    if (myCookie) {
        res.send({ show : false });
    } else {
        res.send({ show : true});
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/public', express.static('public'));

// index.js는 생략 가능, 다른 이름이면 작성해줘야 함
const router = require('./routes');
app.use('/', router); // 앞에 주소로 들어오면 router로 넘어감
// ex)
// const userRouter = require('./routes/user');
// app.use('/user', userRouter);

// * 맨마지막 선언
// get, post등 상관없이 모든 요청에 대해 오류 처리
app.use('*', (req, res) => {
    res.render('404');
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});
const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 정적 파일 경로 설정
app.use('/static', express.static('./static'));

// userRouter 라우터 불러오기
const userRouter = require('./routes/user');

// 들어오면 -> index.ejs 렌더링
app.get('/', (req, res) => {
    res.render('index');
});

// /user로 들어오면 -> userRouter로 라우팅
app.use('/user', userRouter);

// 예외처리 404.ejs
app.use('*', (req, res) => {
    res.render('404');  
});

db.sequelize.sync().then(() => {
    // 서버 오픈
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`)
    });
});
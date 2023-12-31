const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models'); // index 생략 가능

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const indexRouter = require('./routes');
// app.use('/', indexRouter);

const visitorRouter = require('./routes/visitor');

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/visitor', visitorRouter);

app.use('*', (req, res) => {
    res.render('404');  
});

db.sequelize.sync({ force : false}).then(() => { // force true: 테이블을 지우고 다시 만듦 // false는 기존 테이블 유지
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`)
    });
});
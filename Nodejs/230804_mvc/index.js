const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/public', express.static('public'));

// 임시 데이터
const comments = [
    {
        id: 1,
        userId: 'helloworld',
        date: '2023-08-01',
        comment: '안녕하세요'
    },
    {
        id: 2,
        userId: 'hihi',
        date: '2023-08-02',
        comment: 'hihi'
    },
    {
        id: 3,
        userId: '333',
        date: '2023-08-03',
        comment: '333'
    },
    {
        id: 4,
        userId: 'good',
        date: '2023-08-04',
        comment: 'good'
    },
]

app.get('/', (req, res) => {
    res.render('index');
});

// GET /comments
app.get('/comments', (req, res) => {
    res.render('comments', { commentInfos: comments });
});

// GET /comment/:id
app.get('/comment/:id', (req, res) => {
    console.log(req.params.id); // id 출력

    const commentId = req.params.id; // id 값

    console.log(comments[commentId - 1]);

    res.render('comment', { commentInfo: comments[commentId - 1] });
    // comments 배열에서 id 값에 -1을 해줘야 배열에 맞는 값이 나옴
    
    //console.log(req.params);
    // { id: '1' }
    // { id: '2' }
    // /comment/:id 로 입력해서 id가 키 값이 된다.
});

// * 맨마지막 선언
app.get('*', (req, res) => {
    res.render('404');
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});
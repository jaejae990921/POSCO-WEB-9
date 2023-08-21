const express = require('express');
const multer = require('multer');
const path = require('path'); // 폴더와 파일의 경로를 쉽게 조작하도록 제공
const app = express();
const PORT = 8000;

//ejs
app.set('view engine', 'ejs');

// app.set('views', './views'); // views 설정을 다른 폴더로 바꿀 때 쓰는 옵션인데, 기본 값이 views 이므로 생략

// --- body-parser ---
// POST 전송일 때 req.body의 값을 사용하기 위해 필요한 미들웨어
// extended : 중첩된 객체 표현을 허용할지 말지 정함
// true면 qs, false면 querystring 모듈 사용
app.use(express.urlencoded({ extended: true }));
// application/x-www-form-urlencoded 형식으로 전달되는 데이터를 분석

app.use(express.json());
// application/json 형식으로 전달되는 데이터를 분석

// 서버실행시 "http://localhost:8000/uploads/파일명" 으로 접근 가능
app.use('/uploads', express.static(__dirname + '/uploads')); // 정적 파일 설정
// __dirname : 현재 실행중인 파일의 경로

// multer 설정
// diskStorage : 파일 저장 관련 설정 객체
const storage = multer.diskStorage({
    // destination : 저장될 경로를 지정(요청객체, 업로드된 파일객체, 콜백함수)
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // 오류, 저장경로
    },
    // filename : 파일이름 결정(요청객체, 업로드된 파일객체, 콜백함수)
    filename: (req, file, cb) => {
        // extname : 파일 확장자 추출
        const ext = path.extname(file.originalname); // 확장자 추출;
        // basename : 파일이름 추출 (파일이름 , 확장자) => 확장자를 제외하고 파일이름만 추출됨
        const newName = path.basename(file.originalname, ext) + Date.now() + ext // 파일이름 + 현재시간 + 확장자
        cb(null, newName); // 오류, 파일이름
    }
})

// 파일 크기 제한
const limits = {
    // fileSize : 파일용량(byte) 제한
    fileSize: 1024 * 1024 * 5 // 5MB
}

// key:value에서 key값과 value값이 같으면 생략 가능
const upload = multer({
    storage,
    limits
});

// router
// 페이지를 지정할때는 미들웨어 use를 사용
app.get('/', (req, res) => {
    res.render('index');
});
// use는 http 전송방식을 이해하지 못함
// 같은 url로 get, post를 만들 수 있지만 use로는 접근이 힘듦.
// 예) get '/login', post '/login'은 다른 페이지이지만 use는 같은 페이지로 인식

// 싱글 : single()
app.post('/upload', upload.single('userfile'), (req, res) => {
    console.log(req.file); // 객체로 들어옴
    res.send(req.body);
});

// 멀티(ver1) : array()
app.post('/upload/array', upload.array('userfiles', 2), (req, res) => { // 2개까지만 받음
    console.log(req.files); // 배열로 들어옴
    res.send(req.body);
});

// 멀티(ver2) : fields()
app.post('/upload/fields', upload.fields([{ name: 'userfile1', maxCount: 2 }, { name: 'userfile2' }]), (req, res) => { // maxCount : 최대 갯수
    console.log(req.files); // 객체 배열로 들어옴
    res.send(req.body);
});

// 동적(비동기)
app.post('/dynamic', upload.single('dynamic'), (req, res) => {
    console.log(req.file);
    res.send(req.file);
});

// use는 404에러페이지를 만들 때 많이 사용 한다!!
app.use('*', (req, res) => {
    res.render('404');
});

//server open
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
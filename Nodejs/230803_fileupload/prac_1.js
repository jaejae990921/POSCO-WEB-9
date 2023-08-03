const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

// views
app.set('view engine', 'ejs');
app.set('views', './views');

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 정적 파일 설정
app.use('/uploads', express.static(__dirname + '/uploads'));

// multer
const uploadDetail = multer({
    // storage: 저장할 공간에 대한 정보
    // diskStorage: 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
    storage: multer.diskStorage({
        destination: (req, file, done) => {
            done(null, 'uploads/');
            // done(에러처리, 저장경로)
        },
        // 파일명
        filename(req, file, done) {
            const id = req.body.id;
            // extname: 확장자 추출
            const ext = path.extname(file.originalname);
            console.log(ext);
            // basename: 파일명 추출 -> 확장자를 뺀 나머지 이름을 리턴
            done(null, id + ext);
            // 원래 이름 + data.now() + 확장자
        },
    }),
    // 파일 사이즈 제한
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

// router
app.get('/', (req, res) => {
    res.render('prac_1');
});

// 동적
app.post('/dynamicFile', uploadDetail.single('dynamic-file'), (req, res) => {
    console.log(req.file);
    res.send(req.file);
})

// 서버 오픈
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});
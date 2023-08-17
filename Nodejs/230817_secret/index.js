const express = require('express');
const crypto = require('crypto');
const e = require('express');
const app = express();
const PORT = 8000;

let pass = ''; // 전역변수 선언
const salt = crypto.randomBytes(16).toString('hex'); // 솔트 생성 -> 16byte hex로 인코딩
const leng = 1000; // 반복 횟수
const key = 64; // 생성할 키의 길이
const algo = 'sha512'; // 해시 알고리즘
// 환경변수에 저장하는 것이 좋지만, salt는 랜덤으로 생성되기 때문에 환경변수에 저장할 수 없음

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/login', (req, res) => {
    const { pw } = req.body;
    // const pass = crypto.createHash("sha512").update(pw).digest("base64");
    // createHash(알고리즘) : 지정한 알고리즘으로 해시 생성
    // update(문자열) : 변환할 문자열
    // digest(인코딩) : 인코딩 방식

    pass = crypto.pbkdf2Sync(pw, salt, leng, key, algo).toString('base64');
    // pbkdf2(Sync) : 비밀번호 기반 키 도출 함수 // Sync가 붙으면 동기
    // pbkdf2(비밀번호, salt, 반복횟수, 출력 byte, 해시 알고리즘).toString(인코딩)

    res.send(pass);
});

app.post('/verify', (req, res) => {
    const { pw } = req.body;
    
    // 기본적인 방법 -> 생성된 해시값으로 비교 54aefaljfiaehfa5 이런거
    const compare = crypto.pbkdf2Sync(pw, salt, leng, key, algo).toString('base64');
    if (compare === pass) {
        res.send(true);
    } else {
        res.send(false);
    }

    // timingSafeEqual을 이용한 방법
    // const compare = crypto.pbkdf2Sync(pw, salt, leng, key, algo); // 버퍼 값 56 04 79 ...
    // const result = crypto.timingSafeEqual(compare, Buffer.from(pass, 'base64')); // 버퍼 값 68 33 57 ...
    // timingSafeEqual(비교할 버퍼, 비교할 버퍼) : 비교할 버퍼가 같으면 true, 다르면 false

    // res.send(result);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
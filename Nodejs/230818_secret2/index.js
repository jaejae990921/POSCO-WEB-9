const express = require('express');
const app = express();
const PORT = 8000;

require('dotenv').config(); // .env 파일 사용

let hash = '';

//ejs
app.set('view engine', 'ejs');

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
app.get('/', (req, res) => {
    console.log(process.env.NAME); // .env 파일에서 설정한 값
    console.log(process.env.NODE_ENV); // package.json에서 설정한 값
    // npm start : development
    // npm run start:prod : production

    res.render('index');
});

app.post('/hash', (req, res) => {
    const { pw } = req.body;
    // hash = createHashedPassword(pw); // 해시함수
    // hash = createPbkdf2(pw); // pbkdf2 함수
    hash = bcryptPassword(pw); // bcrypt 함수
    res.json({ hash });
});

app.post('/verify', (req, res) => {
    const { pw } = req.body;
    // const compare = verifyPassword(pw, salt, hash); // pbkdf2 함수 비교
    const compare = comparePassword(pw, hash); // bcrypt 함수 비교
    res.json({ compare });
});

app.post('/cipher', (req, res) => {
    const { data } = req.body;
    const encrypt = cipherEncrypt(data); // 암호화
    console.log("encrypt : ", encrypt);

    const decrypt = decipher(encrypt); // 복호화
    console.log("decrypt : ", decrypt);

    res.json({ decrypt });
})

//server open
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});


// ----- 단방향 ----- //
const crypto = require('crypto');

// 해시함수
const createHashedPassword = (password) => {
    // createHash(알고리즘).update(암호화할값).digest(인코딩방식)
    return crypto.createHash('sha512').update(password).digest('base64')
    // password를 sha512 방식으로 암호화하고 base64로 인코딩
}

// pbkdf2 함수
const salt = crypto.randomBytes(16).toString('base64'); // salt 생성
const iterations = 100; // 반복횟수
const keylen = 64; // 생성할 키의 길이
const digest = process.env.HASH; // 해시 알고리즘

const createPbkdf2 = (password) => {
    // pbkdf2 함수 (비밀번호, 솔트, 반복횟수, 키의길이, 알고리즘)으로 생성
    // 반환되는 값은 Buffer 값 // c7 0e 65 cc 1d 71 33 ff c1 45 ...
    const hash = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest);
    return hash.toString('base64'); // base64로 인코딩해서 리턴
}

// 암호 비교
const verifyPassword = (password, salt, dbPassword) => {
    const compare = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString('base64');
    
    // 확인
    console.log('compare : ', compare);
    console.log('dbPassword : ', dbPassword)

    if ( compare == dbPassword ) {
        return true;
    } else {
        return false;
    }
}

// ----- 양방향 ----- //
const algorithm = 'aes-256-cbc'; // 256bit 키를 사용, 블록크기는 128bit
const key = crypto.randomBytes(32); // 128bit(16byte) 길이의 랜덤한 값을 생성
const iv = crypto.randomBytes(16); // 초기화 벡터, 데이터블록을 암호화할 때 보안성을 높이기 위해 사용

// 암호화
const cipherEncrypt = (word) => {
    const cipher = crypto.createCipheriv(algorithm, key, iv); // 암호화 객체 생성
    let encryptedData = cipher.update(word, 'utf-8', 'base64'); // 암호화할 데이터, 입력 인코딩, 출력 인코딩
    encryptedData += cipher.final('base64'); // 최종결과 생성
    return encryptedData;
}
// 복호화
const decipher = (encryptedData) => {
    const decipher = crypto.createDecipheriv(algorithm, key, iv); // 복호화 객체 생성
    let decryptedData = decipher.update(encryptedData, 'base64', 'utf-8'); // 복호화할 데이터, 입력 인코딩, 출력 인코딩
    decryptedData += decipher.final('utf-8');
    return decryptedData;
};

// ----- bcrypt(단방향) -----
const bcrypt = require('bcrypt');
const saltNumber = 10;

// 암호화
const bcryptPassword = (password) => {
    return bcrypt.hashSync(password, saltNumber);
}
// 비교
const comparePassword = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword);
};

// npm start 는 run이 생략 가능
// npm run start:prod는 run 붙여줘야 함
const mysql = require('mysql');

// mysql 연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'simson',
    password: 'simson',
    database: 'kdt9'
});

conn.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('mysql connected');
});

// 회원가입
exports.postSignup = (data, callback) => {
    const query = `INSERT INTO user (userId, pw, name) VALUES ('${data.userId}', '${data.pw}', '${data.name}')`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err)
            return;
        }
        callback(rows);
    });
}

// 로그인
exports.postSignin = (data, callback) => {
    const query = `SELECT * FROM user WHERE userId='${data.userId}' AND pw='${data.pw}'`;
    conn.query(query, (err, rows) => {
        callback(rows);
    });
}

// 프로필 수정
exports.patchProfile = (data, callback) => {
    const query = `UPDATE user SET userId='${data.userId}', pw='${data.pw}', name='${data.name}' WHERE id=${data.id}`;
    conn.query(query, (err, rows) => {
        console.log('rows : ', rows);
        if (err) {
            console.log(err)
            return;
        }
        callback();
    });
}

// 프로필 삭제
exports.deleteProfile = (data, callback) => {
    const query = `DELETE FROM user WHERE id=${data.id}`;
    conn.query(query, (err, rows) => {
        console.log('rows : ', rows);
        if (err) {
            console.log(err)
            return;
        }
        callback();
    });
}
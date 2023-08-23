const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'simson',
    password: 'simson',
    database: 'kdt9',
    port: 3306,
});

// 회원가입 정보 데이터베이스 저장
const db_signup = (data, cb) => {
    const query = `INSERT INTO user (userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}')`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('db_signup : ', rows);
        cb();
    });
}

const db_signin = (req, cb) => {
    const query = `SELECT * FROM user WHERE userid='${req.userid}' AND pw='${req.pw}'`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('db_signin : ', rows);
        // select문의 쿼리문은 배열로 반환
        cb(rows);
    });
}

module.exports = {
    db_signup,
    db_signin
}
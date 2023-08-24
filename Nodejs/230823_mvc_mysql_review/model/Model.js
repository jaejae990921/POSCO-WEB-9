const mysql = require('mysql');

//mysql연결
// const conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'simson',
//     password: 'simson',
//     database: 'kdt9',
//     port: 3306,
// });

const conn = mysql.createPool({
    host: 'localhost',
    user: 'simson',
    password: 'simson',
    database: 'kdt9',
    port: 3306,
    connectionLimit: 30, // 최대 연결 수 (기본값 10)
});

// createConnection : 단일 연결 , 매번 연결이 필요할 때마다 새로운 연결 생성
// 연결수가 많아지면 성능에 영향이 생김.
// createPool : 여러연결, 여러개의 연결을 미리 생성하고 관리
// 요청이 들어올때마다 생성한 연결을 할당. 동시처리 가능
// 작업완료 후 해당 연결을 반환
// 연결이 필요하지 않을경우 자도으로 반환. 풀의 연결 수를 제한하고 관리를 최적화
// 다중연결 서비스에 적합하다.

// ----- //

// 문자열 보간방법
// `INSERT INTO user (userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}')`
// 단점
// 1. sql injection 공격에 취약
// 2. 문자열에 특수문자가 포함될 경우 오류가 발생할 수 있다.
// Prepared Statement 방법
// INSERT INTO user (userid, pw, name) VALUES (?, ?, ?)

// 회원가입 정보 데이터베이스 저장
const db_signup = (data, cb) => {
    // const query = `INSERT INTO user (userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}')`;
    // conn.query(query, (err, rows) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log('db_signup : ', rows);
    //     cb();
    // });
    const query = 'INSERT INTO user (userid, pw, name) VALUES (?, ?, ?)';
    conn.query(query, [data.userid, data.pw, data.name], (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('db_signup : ', rows);
        cb();
    });
}

// 로그인
const db_signin = (data, cb) => {
    // const query = `SELECT * FROM user WHERE userid='${req.userid}' AND pw='${req.pw}'`;
    // conn.query(query, (err, rows) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log('db_signin : ', rows);
    //     // select문의 쿼리문은 배열로 반환
    //     cb(rows);
    // });
    const query = 'SELECT * FROM user WHERE userid=? AND pw=?';
    conn.query(query, [data.userid, data.pw], (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('db_signin : ', rows);
        // select문의 쿼리문은 배열로 반환
        cb(rows);
    });
}

// 회원정보 조회
const db_profile = (data, cb) => {
    console.log('data : ', data);
    console.log('data.name : ', data.name);

    const query = 'SELECT * FROM user WHERE id = ?';
    conn.query(query, [data.name], (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('db_profile : ', rows);
        cb(rows);
    });
}

// 회원정보 수정
const db_profile_edit = (data, cb) => {
    console.log('여기야 !!!!! data : ', data)
    const query = 'UPDATE user SET userid = ?, name = ?, pw = ? WHERE id = ?';
    conn.query(query, [data.userid, data.name, data.pw, data.id], (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('db_profile_edit : ', rows);
        cb(true);
    });
}

module.exports = {
    db_signup,
    db_signin,
    db_profile,
    db_profile_edit
}
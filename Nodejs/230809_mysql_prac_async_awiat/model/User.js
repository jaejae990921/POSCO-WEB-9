// const mysql = require('mysql');
import mysql from 'mysql2/promise';

// mysql 연결
const conn = mysql.createPool({
    host: 'localhost',
    user: 'simson',
    password: 'simson',
    database: 'kdt9'
});

// createConnection : 단일 연결 , 매번 연결이 필요할 때마다 새로운 연결 생성
// 연결수가 많아지면 성능에 영향이 생김.
// createPool : 여러연결, 여러개의 연결을 미리 생성하고 관리
// 요청이 들어올때마다 생성한 연결을 할당. 동시처리 가능

// 회원가입
export const post_signup = async (data) => {
    try {
        const query = 'INSERT INTO user (userId, pw, name) VALUES (?, ?, ?)';
        await conn.query(query, [data.userId, data.pw, data.name]);
    } catch (error) {
        console.log(error)
    }
};

// 로그인
export const post_signin = async (data) => {
    try {
        const query = 'SELECT * FROM user WHERE userId = ? AND pw = ?';
        const [rows] = await conn.query(query, [data.userId, data.pw]); // 구조분해할당으로 필요한 값만 가져옴
        return rows; // 리턴
    } catch (error) {
        console.log(error)
    }
};

// 프로필 조회
export const post_profile = async (data) => {
    try {
        const query = 'SELECT * FROM user WHERE id = ?';
        const [rows] = await conn.query(query, [data.id]);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

// 프로필 수정
export const edit_profile = async (data) => {
    try {
        const query = 'UPDATE user SET userId = ?, pw = ?, name = ? WHERE id = ?';
        const [rows] = await conn.query(query, [data.userId, data.pw, data.name, data.id]);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

// 프로필 삭제
export const delete_profile = async (id) => {
    try {
        const query = 'DELETE FROM user WHERE id = ?';
        await conn.query(query, [id]);
    } catch (error) {
        console.log(error);
    }
}
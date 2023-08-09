// const User = require('../model/User');
import * as User from '../model/User.js';

// /user/signup -> signup.ejs 렌더링
export const getSignup = (req, res) => {
    res.render('signup');
}

// /user/signin -> signin.ejs 렌더링
export const getSignin = (req, res) => {
    res.render('signin');
}

// /user/signup -> 회원가입 post
export const post_signup = async (req, res) => {
    try {
        await User.post_signup(req.body);
        res.send({ result: true });
    } catch (error) {
        console.log(error)
    }
}

// /user/signin -> 로그인 post
export const post_signin = async (req, res) => {
    try {
        const result = await User.post_signin(req.body);
        if (result.length > 0) {
            res.send({ result: true, id: result[0].id, userId: result[0].userid, pw: result[0].pw, name: result[0].name });
        } else {
            res.send({ result: false, data: null });
        }
    } catch (error) {
        console.log(error);
    }
};

// /user/profile -> 프로필 조회
export const post_profile = async (req, res) => {
    try {
        const result = await User.post_profile(req.body);
        res.render('profile', { id: result[0].id, userId: result[0].userid, pw: result[0].pw, name: result[0].name });
    } catch (error) {
        console.log(error);
    }
}

// 프로필 수정
export const edit_profile = async (req, res) => {
    try {
        const result = await User.edit_profile(req.body);
        res.send({ result: true, id: req.body.id, userId: req.body.userId, pw: req.body.pw, name: req.body.name });
    } catch (error) {
        console.log(error);
    }
}

// 프로필 삭제
export const delete_profile = async (req, res) => {
    try {
        await User.delete_profile(req.body.id);
        res.send({ result: true });
    } catch (error) {
        console.log(error)
    }
}
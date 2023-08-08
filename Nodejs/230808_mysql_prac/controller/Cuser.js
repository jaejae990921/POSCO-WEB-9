const User = require('../model/User');

// /user/signup -> signup.ejs 렌더링
exports.getSignup = (req, res) => {
    res.render('signup');
}

// /user/signup -> 회원가입 post
exports.postSignup = (req, res) => {
    User.postSignup(req.body, (result) => {
        res.send({ result: true });
    });
}

// /user/signin -> signin.ejs 렌더링
exports.getSignin = (req, res) => {
    res.render('signin');
}

// /user/signin -> 로그인 post
exports.postSignin = (req, res) => {
    User.postSignin(req.body, (result) => {
        if(result.length > 0) {
            res.send({ result: true, id: result[0].id, userId: result[0].userid, pw: result[0].pw, name: result[0].name });
        } else {
            res.send({ result: false, data: null });
        }
    });
};

// /user/profile -> profile.ejs 렌더링
exports.getProfile = (req, res) => {
    res.render('profile', { id: req.body.id, userId: req.body.proId, pw: req.body.proPw, name: req.body.proName });
}

// /user/profile/edit -> 프로필 수정
exports.patchProfile = (req, res) => {
    User.patchProfile(req.body, () => {
        res.send({ result: true, userId: req.body.userId, pw: req.body.pw, name: req.body.name});
    });
}

// /user/profile/delete -> 프로필 삭제
exports.deleteProfile = (req, res) => {
    User.deleteProfile(req.body, () => {
        res.send({ result: true });
    });
}
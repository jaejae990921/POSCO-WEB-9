// const User = require('../model/User');
const { User } = require('../models');
const { Op } = require('sequelize');

// /user/signup -> signup.ejs 렌더링
exports.getSignup = (req, res) => {
    res.render('signup');
}

// /user/signin -> signin.ejs 렌더링
exports.getSignin = (req, res) => {
    res.render('signin');
}

// /user/profile -> profile.ejs 렌더링
exports.getProfile = (req, res) => {
    console.log('여기여기여기',req.body)
    res.render('profile', { id: req.body.id, userId: req.body.proId, pw: req.body.proPw, name: req.body.proName });
}

// /user/signup -> 회원가입 post
exports.postSignup = (req, res) => {
    User.create({
        userid: req.body.userId,
        name: req.body.name,
        pw: req.body.pw,
    }).then((result) => {
        console.log('result', result);
        res.send({ result: true })
    });
}

// /user/signin -> 로그인 post
exports.postSignin = (req, res) => {
    const { userId, pw } = req.body; // 구조분해할당
    User.findOne({
        where: {
            userid: userId, // 같으면 생략가능하므로, 구조분해할당을 이용하여
            pw, // 코드를 매우 간결하게 작성할 수 있음
        }
    }).then((data) => {
        console.log('result여기여기', data);
        res.send({ result: true, id: data.id, userId: data.userid, pw: data.pw, name: data.name})
    });
};

// /user/profile/edit -> 프로필 수정
exports.patchProfile = (req, res) => {
    const { id, proId, proPw, proName } = req.body;
    User.updata({
        userid: proId,
        pw: proPw,
        name: proName,
    },
    {
        where: { id }
    }).then((result) => {
        console.log('update', result);
        res.send({ result: true });
    });
}

// /user/profile/delete -> 프로필 삭제
exports.deleteProfile = (req, res) => {
    const { id } = req.body;
    User.destroy({
        where: { id }        
    }).then((result) => {
        console.log('delete', result);
        res.send({ result: true });
    });
}

exports.findall = (req, res) => {
    User.findAll({
        // attriutes 원하는 칼럼 조회
        attributes: ['name', 'pw'], // name이랑 pw만 가져오기
        // Op.gt(초과), Op.gte(이상), Op.lt(미만), Op.ne(같지않은)
        // Op.or(또는), Op.in(배열 요소중 하나), Op.notIn(배열 오소와 모두 다름)
        where: {id: { [Op.gte]: 2 }},
        order: [['id', 'DESC']], // id를 기준으로 내림차순 정렬
        limit: 2, // 2개만 가져오기
        offset: 2, // 2개를 건너뛰고 가져오기
    }).then((result) => {
        console.log('findall', result);
        res.send({ result});
    })
}
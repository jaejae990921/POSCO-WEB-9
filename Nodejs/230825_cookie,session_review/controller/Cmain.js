// const model = require('../model/Model');
const { User } = require('../models'); // index.js 생략
const bcrypt = require('bcrypt');
const saltNumber = 10;

//쿠키 설정
const cookieConfig = {
    httpOnly: true, // 웹 서버를 통해서만 쿠키에 접근가능
    maxAge: 60 * 1000, // 1분 -> 무제한은 그냥 maxAge 안쓰면 됨
}

////////////////////////////////
//GET
//메인페이지
const main = (req, res) => {
    console.log('cookie', req.cookies);
    res.render('index');
};
//회원가입페이지
const signup = (req, res) => {
    // 쿠키생성
    // res.cookie(쿠키이름, 쿠키값, 옵션객체)
    res.cookie('testCookie', 'signup', cookieConfig);
    res.render('signup');
};

//로그인페이지
const signin = (req, res) => {
    console.log(req.session.userInfo, req.sessionID) // 세션ID는 직접적으로 사용하지는 않음, 여기서는 그낭 확인차 출력해봄
    // 세션이 존재할 경우 세션에 저장된 정보를 통해 profile 페이지로 이동
    if (req.session.userInfo) {
        res.redirect(`/profile/${req.session.userInfo.id}`);
    } else {
        res.render('signin');
    }
};

//회원정보 조회 페이지
const profile = (req, res) => {
    User.findOne({
        where: {
            id: req.params.number,
        }
    }).then((result) => {
        res.render('profile', { data: result })
    })
};
const buy = (req, res) => { };

///////////////////////////////
//POST
//회원가입
const post_signup = (req, res) => {
    const { userid, pw, name } = req.body;

    let hashPassword = bcryptPassword(pw);

    User.create({ userid, name, pw: hashPassword }).then(() => {
        res.json({ result: true });
    });
};

//로그인
const post_signin = async (req, res) => {
    console.log(req.body);
    const { userid, pw } = req.body;
    const result = await User.findOne({
        where: {
            userid
        }
    })

    if (result == null) {
        res.json({ result: "1" });
    } else {
        const dbPw = result.dataValues.pw;

        if (comparePassword(pw, dbPw)) {
            // 로그인 성공시 세션에 name, id 저장
            req.session.userInfo = { name: result.name, id: result.id }
            res.json({ result: "3", data: result.dataValues });
        } else {
            res.json({ result: "2" });
        }
    }
};

/////////////////////////////////////////
//PATCH
const edit_profile = (req, res) => {
    // update (수정될 정보를 객체형태로 입력, 수정될 곳 객체 입력)
    const { name, pw, id } = req.body;
    User.update({ name, pw }, { where: { id } }).then(() => {
        res.json({ result: true });
    })
};

/////////////////////////////////////////
// DELETE
// 회원탈퇴 destroy()
const delete_profile = (req, res) => {
    User.destroy({ where: { id: req.body.id } }).then(() => {
        res.json({ result: true });
    })
};

module.exports = {
    main,
    signup,
    signin,
    profile,
    buy,
    post_signup,
    post_signin,
    edit_profile,
    delete_profile
};

// 암호화
const bcryptPassword = (password) => {
    return bcrypt.hashSync(password, saltNumber);
}
// 비교
const comparePassword = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword);
};
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
    if (req.cookies.testCookie) {
        // 쿠키가 존재한다면 로그인 되어있는 상태
        User.findAll({
            attributes: ['name']
        }).then((data) => {
            console.log(data)
            res.render('list', { name: req.session.userInfo, data });
        })
    } else {
        // 쿠키가 없으면 alert창 띄우고 로그인 페이지로 이동
        res.send(`<script>alert('로그인 해주세요'); document.location.href='/signin';</script>`);
    }
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
        User.findAll({
            attributes: ['name']
        }).then((data) => {
            console.log(data)
            res.render('list', { name: req.session.userInfo, data });
        })
    } else {
        res.render('signin');
    }
};

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
            res.cookie('testCookie', 'signin', cookieConfig);
            // 세션에 사용자 name, id 저장
            req.session.userInfo = { name: result.name, id: result.id }
            res.json({ result: "3", data: result.dataValues });
        } else {
            res.json({ result: "2" });
        }
    }
};

const list = (req, res) => {
    if (!req.session.userInfo) {
        res.send(`<script>alert('로그인 해주세요'); document.location.href='/signin';</script>`);
    } else {
        User.findAll({
            attributes: ['name']
        }).then((data) => {
            console.log(data)
            res.render('list', { name: req.session.userInfo, data });
        })
    }
};

module.exports = {
    main,
    signup,
    signin,
    post_signup,
    post_signin,
    list,
};

// 암호화
const bcryptPassword = (password) => {
    return bcrypt.hashSync(password, saltNumber);
}
// 비교
const comparePassword = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword);
};

// 쿠키삭제
// res.clearCookie(쿠키이름)

// 세션삭제
// req.session.destroy();

// 연결이 끊어지면 세션을 삭제하고 싶다면?
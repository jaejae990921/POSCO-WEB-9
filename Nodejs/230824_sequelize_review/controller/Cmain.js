// const model = require('../model/Model');
const { User } = require('../models'); // index.js 생략
const bcrypt = require('bcrypt');
const saltNumber = 10;

////////////////////////////////
//GET
//메인페이지
const main = (req, res) => {
    res.render('index');
};
//회원가입페이지
const signup = (req, res) => {
    res.render('signup');
};
//로그인페이지
const signin = (req, res) => {
    res.render('signin');
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
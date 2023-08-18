const { User } = require('../models');
const bcrypt = require('bcrypt');
const salt = 10;

// 메인
exports.index = (req, res) => {
    res.render('index');
};

// 회원가입
exports.join = (req, res) => {
    res.render('join');
};

// 로그인
exports.login = (req, res) => {
    res.render('login');
}

// ----- POST ----- //

// 회원가입
exports.join_post = async (req, res) => {
    const { userid, pw, name } = req.body;
    const hash = await bcryptPassword(pw);
    await User.create({
        userid,
        pw: hash,
        name
    }).then((result) => {
        res.send({ result: true });
    })
};

// 로그인
exports.login_post = async (req, res) => {
    const { userid, pw } = req.body;
    await User.findOne({
        where: {
            userid
        }
    }).then((data) => {
        const compare = comparePassword(pw, data.pw);
        if (compare) {
            res.send({ result: true });
        } else {
            res.send({ result: false });
        }
    });
};

// 암호화
const bcryptPassword = (password) => {
    return bcrypt.hashSync(password, salt);
}
// 비교
const comparePassword = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword);
};
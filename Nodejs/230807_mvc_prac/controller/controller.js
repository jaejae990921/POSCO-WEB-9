const Comment = require('../model/model');
const userInfo = Comment.userInfo();

exports.main = (req, res) => {
    res.render('login');
};

exports.login = (req, res) => {
    let id = req.body.id;
    let pw = req.body.pw;

    for (let i = 0; i < userInfo.length; i++) {
        if (id === userInfo[i].id && pw === userInfo[i].pw) {
            res.send({ result: '성공' });
            return;
        }
    }

    res.send({ result: '실패' });
};

// 원래 module.exports 인데 하나하나 내보낼 때는 exports.함수명으로 가능
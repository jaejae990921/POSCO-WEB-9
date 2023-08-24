const model = require('../model/Model');

// --- GET --- //
const main = (req, res) => {
    res.render('index');
};

// 회원가입
const signup = (req, res) => {
    res.render('signup');
}

// 로그인
const signin = (req, res) => {
    res.render('signin');
}

// --- POST --- //

// 회원가입
const post_signup = (req, res) => {
    model.db_signup(req.body, () => {
        res.json({ result: true})
    });
}

// 로그인
const post_signin = (req, res) => {
    model.db_signin(req.body, (result) => {
        if (result.length > 0) {
            res.json({ result: true, data: result[0]});
        } else {
            res.json({ result: false });
        }
    });
}

// 추가 과제 //
// 회원정보 조회 GET
const profile = (req, res) => {
    console.log(req.params.name); // { name: 'simson'}
    console.log(req.query);
    // http://localhost:8000/profile/simson?age=20&gender=man 을 입력하면
    // { age: '20', gender: 'man' } 이 출력됨
    model.db_profile(req.params, (result) => {
        res.render('profile', { data: result[0] });
    })
}

// 회원정보 수정 PATCH
const edit_profile = (req, res) => {
    console.log('req!!!', req)
    model.db_profile_edit(req.body, (result) => {
        console.log('req.body : ', req.body);
        if (result) {
            res.json({ result: true });
        }
    });
}

module.exports = {
    main,
    signup,
    signin,
    profile,
    post_signup,
    post_signin,
    edit_profile
}
const model = require('../model/Model');

const main = (req, res) => {
    res.render('index');
}

const comments = (req, res) => {
    res.render('comments', { lists: model });
}

const comment = (req, res) => {
    console.log(req.params);
    // comment/100으로 접속하면 req.params에 {name: '100'}이 들어감 => req.params.name으로 접근
    // :name 콜론 뒤에 붙은 변수가 key, 입력한 값이 value
    res.render('comment', {data: model[Number(req.params.name) - 1]});
}

module.exports = {
    main: main,
    comms: comments,
    comm: comment
}

// 모듈 사용방법
// 방법 1
// module.exports.main = 함수, 변수, 문자열, 숫자
// exports.main = 함수, 변수, 문자열, 숫자 // 위 코드의 축약형

// 방법 2
// const test = () => {}
// module.exports = test

// 방법 3
// const main = () => {}
// module.exports = {
//     main: main
// }
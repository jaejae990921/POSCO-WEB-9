const Comment = require('../model/MComment');

exports.main = (req, res) => {
    res.render('index');
};

exports.comments = (req, res) => {
    res.render('comments', { commentInfos: Comment.comments() });
};

exports.comment = (req, res) => {
    console.log(req.params.id); // id 출력

    const commentId = req.params.id; // id 값
    const comments = Comment.comments();

    console.log(comments[commentId - 1]);

    res.render('comment', { commentInfo: comments[commentId - 1]});
    // comments 배열에서 id 값에 -1을 해줘야 배열에 맞는 값이 나옴
    
    //console.log(req.params);
    // { id: '1' }
    // { id: '2' }
    // /comment/:id 로 입력해서 id가 키 값이 된다.
};
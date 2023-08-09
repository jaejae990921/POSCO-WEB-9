// const Visitor = require('../model/Visitor');
const models = require('../models');

exports.main = (req, res) => {
    res.render('index');
};

// 방명록 전체 보이기
exports.getVisitors = (req, res) => {
    // select * from visitor 랑 똑같음
    models.Visitor.findAll().then((result) => {
        res.render('visitor', { data: result }); // 배열로 넘어감
    })
};

//방명록 하나 조회
exports.getVisitor = (req, res) => {
    models.Visitor.findOne({
        where: { id: req.query.id, }
    }).then((result) => {
        console.log(result)
        res.render('visitor', { data: [result] }); // 배열로 넣어서 넘겨줘야 함
    });
};

// 방명록 하나 생성
exports.postVisitor = (req, res) => {
    models.Visitor.create({
        name: req.body.name,
        comment: req.body.comment,
    }).then((result) => {
        res.send({ id: result.id, name: result.name, comment: result.comment });
        // result.dataValues.id, result.dataValues.name, result.dataValues.comment랑 똑같음
    });
}

// 방명록 하나 수정
exports.patchVisitor = (req, res) => {
    models.Visitor.update(
    {
        name: req.body.name,
        comment: req.body.comment,
    },
    {
        where: { id: req.body.id } // where는 객체로 넣어줘야 함 왜냐하면 여러개의 조건을 넣을 수 있기 때문
    }).then(() => {
        res.send({ result: true });
    })
}

// 방명록 하나 삭제
exports.deleteVisitor = (req, res) => {
    models.Visitor.destroy({
        where: { id: req.body.id },
    }).then(() => {
        res.send({ result: true });
    })
};
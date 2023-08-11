const { Student, Classes, StudentProfile } = require('../models');

exports.main = (req, res) => {
    res.render('index');
};

exports.post_student = async (req, res) => {
    try {
        const { userid, password, email, name, major } = req.body;
        const user = await Student.create({
            userid,
            password,
            email,
            studentProfile: { // 참조한 테이블명
                name,
                major,
            },
        }, {
            include: StudentProfile, // 맨위에 선언한 StudentProfile임
        });
        console.log(user)
        res.send(user);
    } catch (error) {
        console.log(error);
    }
}

exports.post_class = async (req, res) => {
    try {
        const { name, room, code, teacher_name, studentId } = req.body;
        const classes = await Classes.create({
            name,
            room,
            code,
            teacher_name,
            studentId,
        })
        res.send(classes);
    } catch (error) {
        console.log(error);
    }
}

exports.get_student = async (req, res) => {
    try {
        // include : 쿼리를 실행할 때 관련된 모델의 데이터도 함꼐 조회할 수 있도록
        const student = await Student.findAll({
            attributes: ['id', 'userid', 'email'], // student 테이블에서 id, userid, email만 가져옴
            include: [{model : StudentProfile, attributes: ['name', 'major']}], // StudentProfile 테이블에서 name, major만 가져옴
            // include: StudentProfile,
        })
        res.send(student);
    } catch (error) {
        console.log(error);
    }
}
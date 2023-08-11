const express = require('express');
const router = express.Router();
const controller = require('../controller/Cstudent');

router.get('/', controller.main);

// 학생 생성
router.post('/student', controller.post_student);

// 강의 생성
router.post('/class', controller.post_class);

// 학생 조회
router.get('/student', controller.get_student);

module.exports = router;
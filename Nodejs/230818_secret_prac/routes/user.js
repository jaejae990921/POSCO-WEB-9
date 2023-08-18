const express = require('express');
const router = express.Router();
const controller = require('../controller/user');

router.get('/', controller.index);

// 회원가입
router.get('/join', controller.join);
router.post('/join', controller.join_post);

// 로그인
router.get('/login', controller.login);
router.post('/login', controller.login_post);

module.exports = router;
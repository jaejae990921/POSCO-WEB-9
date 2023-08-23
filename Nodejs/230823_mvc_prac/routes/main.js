const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);

//전체목록보기
router.get('/info', controller.info);

router.post('/add', controller.addPost);

module.exports = router;
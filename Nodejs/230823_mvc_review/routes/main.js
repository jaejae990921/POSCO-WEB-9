const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);

//전체목록보기
router.get('/comments', controller.comms);

//상세보기
router.get('/comment/:name', controller.comm);

module.exports = router;
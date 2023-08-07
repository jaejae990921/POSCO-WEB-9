const express = require('express');
const router = express.Router(); // 기존의 app = express()를 .Router로 바꿔줌
const controller = require('../controller/CComment');

router.get('/', controller.main);

// GET /comments
router.get('/comments', controller.comments);

// GET /comment/:id
router.get('/comment/:id', controller.comment);

module.exports = router;
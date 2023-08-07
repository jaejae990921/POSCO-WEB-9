const express = require('express');
const router = express.Router(); // 기존의 app = express()를 .Router로 바꿔줌
const controller = require('../controller/controller');

router.get('/', controller.main);

router.post('/axios', controller.login);

module.exports = router; // 전부 내보냄
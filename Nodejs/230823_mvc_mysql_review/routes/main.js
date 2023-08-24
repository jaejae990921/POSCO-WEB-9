const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);

//회원가입
router.get('/signup', controller.signup); // 회원가입 페이지 열기
router.post('/signup', controller.post_signup); // 데이터베이스에 회원정보 저장

//로그인
router.get('/signin', controller.signin); // 로그인 페이지 열기
router.post('/signin', controller.post_signin); // 로그인 처리

//회원정보 조회
// GET조회 방식 url을 query string 또는 파라미터 방식으로 지정
// query string 방식은 현재 페이지에서 데이터를 전달하는 방식
// 파라미터 방식은 다른 페이지로 render할 때 데이터를 전달하는 방식
router.get('/profile/:name', controller.profile);

//회원정보 수정
router.patch('/profile/edit', controller.edit_profile);

// 예시) 회원 구매목록
// router.get('/profile/buy', controller.buy_profile)
// 이렇게 작성하면 위에 있는 /profile/:id에서 이미 다 걸러져서 이 부분으로 못 옴

module.exports = router;
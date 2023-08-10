const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

// signup.ejs
// /GET /signup -> signup.ejs 렌더링
router.get('/signup', controller.getSignup);

// /POST /signup -> 회원가입
router.post('/signup', controller.postSignup);

///////////////////////////////////////////////

// signin.ejs
// /GET /signin -> signin.ejs 렌더링
router.get('/signin', controller.getSignin);

// /POST /signin -> 로그인
router.post('/signin', controller.postSignin);

///////////////////////////////////////////////

// profile.ejs
router.post('/profile', controller.getProfile);

// /PATCH /profile/edit -> 프로필 수정
router.patch('/profile/edit', controller.patchProfile);

// /DELETE /profile/delete -> 프로필 삭제
router.delete('/profile/delete', controller.deleteProfile);

router.get('/findall', controller.findall)

module.exports = router;
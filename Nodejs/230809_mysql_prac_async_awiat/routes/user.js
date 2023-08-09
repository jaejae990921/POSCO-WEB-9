// const express = require('express');
// const controller = require('../controller/Cuser');
import express from 'express';
import * as controller from '../controller/Cuser.js';
// Cuser는 한꺼번에 내보내지않고, 기능별로 하나씩 내보냈기 때문에 그냥 import controller from '../controller/Cuser.js'; 라고 쓰면 안된다.
// * as를 입력하게 되면 그냥 controller.기능명 으로 사용할 수 있다.

const router = express.Router();

// signup.ejs
// /GET /signup -> signup.ejs 렌더링
router.get('/signup', controller.getSignup);

// /POST /signup -> 회원가입
router.post('/signup', controller.post_signup);

///////////////////////////////////////////////

// signin.ejs
// /GET /signin -> signin.ejs 렌더링
router.get('/signin', controller.getSignin);

// /POST /signin -> 로그인
router.post('/signin', controller.post_signin);

///////////////////////////////////////////////

// profile.ejs
router.post('/profile', controller.post_profile);

// /PATCH /profile/edit -> 프로필 수정
router.patch('/profile/edit', controller.edit_profile);

// /DELETE /profile/delete -> 프로필 삭제
router.delete('/profile/delete', controller.delete_profile);

// module.exports = router;
export default router;
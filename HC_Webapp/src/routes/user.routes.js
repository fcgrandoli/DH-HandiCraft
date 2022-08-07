const express = require('express');
const router = express.Router();
const {
  viewLogin,
  closeSession,
  updateProfileDetails,
  viewProfileDetails,
  loginUser,
  viewRegister,
  registerUser,
} = require('../controllers/controller.users.js');
const uploadUser = require('../middlewares/userUpload.js');
const validationLogin = require('../validations/login');
const validationRegister = require('../validations/register');

router.get('/viewLogin', viewLogin);

router.get('/close', closeSession);

router.post('/update', uploadUser.single('avatar'), updateProfileDetails);

router.get('/profile', viewProfileDetails);

router.post('/userLogin', [validationLogin], loginUser);

router.get('/viewRegister', viewRegister);

router.post(
  '/registerUser',
  uploadUser.single('avatar'),
  [validationRegister],
  registerUser
);

module.exports = router;

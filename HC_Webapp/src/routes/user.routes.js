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
const validationUpdateProfile = require('../validations/validationUpdateProfile');
const validationRegister = require('../validations/register');
const authMiddleware = require('../middlewares/authMiddleware.js');
const guestMiddleware = require('../middlewares/guestMiddleware.js');

router.get('/viewLogin', guestMiddleware, viewLogin);

router.get('/close', authMiddleware, closeSession);

router.post(
  '/update',
  authMiddleware,
  uploadUser.single('avatar'),
  validationUpdateProfile,
  updateProfileDetails
);

router.get('/profile', authMiddleware, viewProfileDetails);

router.post('/userLogin', guestMiddleware, validationLogin, loginUser);

router.get('/viewRegister', guestMiddleware, viewRegister);

router.post(
  '/registerUser',
  guestMiddleware,
  uploadUser.single('avatar'),
  validationRegister,
  registerUser
);

module.exports = router;

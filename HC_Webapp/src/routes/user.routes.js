const express = require('express');
const router = express.Router();
const controllerLogin = require('../controllers/controller.users.js');
const uploadUser = require('../middlewares/userUpload.js');

router.get('/viewLogin', controllerLogin.viewLogin);

router.get('/close', controllerLogin.closeSession);

router.post(
  '/update',
  uploadUser.single('avatar'),
  controllerLogin.updateProfileDetails
);

router.get('/profile', controllerLogin.viewProfileDetails);

router.post('/userLogin', controllerLogin.loginUser);

router.get('/viewRegister', controllerLogin.viewRegister);

router.post(
  '/registerUser',
  uploadUser.single('avatar'),
  controllerLogin.registerUser
);

module.exports = router;

const express = require('express');
const router = express.Router();
const controllerLogin = require('../controllers/controller.login.js');
const {
  indexUser,
  writeUserJSON,
  loginUser,
  readLoggedUser,
  updateUser,
} = require('../model/users.model');
const uploadUser = require('../middlewares/userUpload.js');

router.get('/', controllerLogin.mostrarLogin);

router.get('/close', controllerLogin.closeSession);

router.post('/update', uploadUser.single('avatar'), (req, res) => {
  if (!req.file) {
    updateUser(req.body);
  } else {
    updateUser(req.body, req.file.filename);
  }
  res.redirect('/');
});

router.get('/user', controllerLogin.accountDetails);

router.put('/user', (req, res) => {
  loginUser(req.body);
  res.redirect('/');
});

module.exports = router;

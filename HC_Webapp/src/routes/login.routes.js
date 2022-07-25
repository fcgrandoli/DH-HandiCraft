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

router.get('/', controllerLogin.mostrarLogin);

router.get('/close', controllerLogin.closeSession);

router.put('/update', (req, res) => {
  updateUser(req.body);
  res.redirect('/');
});

router.get('/user', controllerLogin.accountDetails);

router.put('/user', (req, res) => {
  loginUser(req.body);
  res.redirect('/');
});

module.exports = router;

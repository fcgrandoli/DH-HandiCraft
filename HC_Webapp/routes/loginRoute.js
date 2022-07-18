const express = require('express');
const router = express.Router();
const userList = require('../views/users/usersList_JSON');
const userLoggedIn = require('../views/users/userSession_JSON');
const controllerLogin = require('../controllers/controllerLogin.js');

router.get('/', controllerLogin.mostrarLogin);

router.get('/close', controllerLogin.closeSession);

router.put('/update', (req, res) => {
  userList.forEach(function (user, index) {
    if (userLoggedIn.user_name == user.user_name) {
      this[index].first_name = req.body.first_name;
      this[index].last_name = req.body.last_name;
      this[index].user_name = req.body.user_name;
      this[index].passwd = req.body.passwd;
      userLoggedIn.first_name = req.body.first_name;
      userLoggedIn.last_name = req.body.last_name;
      userLoggedIn.user_name = req.body.user_name;
      userLoggedIn.passwd = req.body.passwd;
    }
  }, userList);
  res.redirect('/');
});

router.get('/user', controllerLogin.accountDetails);

router.put('/user', (req, res) => {
  let validateUser = 'el usuario no existe o la contraseña es incorrecta';
  userList.forEach(user => {
    if (
      req.body.user_name == user.user_name &&
      req.body.passwd == user.passwd
    ) {
      user.loggedIn = true;
      userLoggedIn.first_name = user.first_name;
      userLoggedIn.last_name = user.last_name;
      userLoggedIn.user_name = user.user_name;
      userLoggedIn.passwd = user.passwd;
      validateUser = user;
    }
  });
  res.redirect('/');
});

module.exports = router;

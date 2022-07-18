const express = require('express');
const router = express.Router();
const controllerRegister = require('../controllers/controllerRegister.js');
const userList = require('../views/users/usersList_JSON');
const userLoggedIn = require('../views/users/userSession_JSON');

router.get('/', controllerRegister.mostrarRegister);

router.put('/user', (req, res) => {
  let tempID = userList.length;
  tempID++;
  let tempUser = {
    id: tempID,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    user_name: req.body.user_name,
    passwd: req.body.passwd,
    role: '',
    loggedIn: false,
  };
  userList.push(tempUser);
  res.redirect('/');
});

module.exports = router;

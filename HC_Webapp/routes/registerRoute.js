const express = require('express');
const router = express.Router();
const controllerRegister = require('../controllers/controllerRegister.js');
const userLoggedIn = require('../views/users/userSession_JSON');
const { resolve } = require('path');
const { readFileSync, writeFileSync } = require('fs');

router.get('/', controllerRegister.mostrarRegister);

router.put('/user', (req, res) => {
  let usersFile = resolve(__dirname, '../data', 'usersList.json');
  let usersJSON = readFileSync(usersFile);
  let usersList = JSON.parse(usersJSON);
  let tempID = usersList.length;
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
  usersList.push(tempUser);
  let write = JSON.stringify(usersList, null, 2);
  writeFileSync(usersFile, write);
  res.redirect('/');
});

module.exports = router;

const express = require('express');
const router = express.Router();
const controllerRegister = require('../controllers/controller.register.js');
const userLoggedIn = require('../views/users/userSession_JSON');
const { index, createUser, write } = require('../model/users.model');

router.get('/', controllerRegister.mostrarRegister);

router.put('/user', (req, res) => {
  createUser(req.body);
  res.redirect('/');
});

module.exports = router;

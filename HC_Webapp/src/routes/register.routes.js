const express = require('express');
const router = express.Router();
const controllerRegister = require('../controllers/controller.register.js');
const {
  indexUser,
  createUser,
  writeUserJSON,
  loginUser,
} = require('../model/users.model');
const uploadUser = require('../middlewares/registerUpload.js');

router.get('/', controllerRegister.mostrarRegister);

router.post('/create', uploadUser.single('avatar'), (req, res) => {
  let usersList = indexUser();
  let tempUser = createUser(req.body, req.file.filename);
  usersList.push(tempUser);
  writeUserJSON(usersList);
  res.redirect('/');
});

module.exports = router;

const express = require('express');
const router = express.Router();
const controllerRegister = require('../controllers/controller.register.js');
const {
  indexUser,
  createUser,
  writeUserJSON,
  writeLoggedUser,
} = require('../model/users.model');
const uploadUser = require('../middlewares/registerUpload.js');

router.get('/', controllerRegister.mostrarRegister);

router.post('/create', uploadUser.single('avatar'), (req, res) => {
  let imageCheck = '';
  let usersList = indexUser();
  if (!req.file) {
    imageCheck = 'blank.jpg';
  } else {
    imageCheck = req.file.filename;
  }
  let tempUser = createUser(req.body, imageCheck);
  usersList.push(tempUser);
  writeLoggedUser(tempUser);
  writeUserJSON(usersList);
  res.redirect('/');
});

module.exports = router;

const {
  indexUser,
  readLoggedUser,
  writeLoggedUser,
  writeUserJSON,
} = require('../model/users.model');
const { validationResult } = require('express-validator');
const { hashSync } = require('bcryptjs');
const { compareSync } = require('bcryptjs');

const controllerLogin = {
  viewLogin: (req, res) => {
    let userLoggedIn = readLoggedUser();
    return res.render('users/login', {
      userLoggedIn: userLoggedIn,
    });
  },
  viewProfileDetails: (req, res) => {
    let userLoggedIn = readLoggedUser();
    res.render('users/accountDetails', {
      userLoggedIn: userLoggedIn,
    });
  },

  closeSession: (req, res) => {
    let usersList = indexUser();
    let loggedUser = readLoggedUser();
    let user = usersList.find(u => u.id == loggedUser.id);
    user.loggedIn = false;
    let eraseSession = Object({
      id: '',
      first_name: '',
      last_name: '',
      user_name: '',
      email: '',
      passwd: '',
      isAdmin: '',
      avatar: '',
      loggedIn: '',
    });
    writeLoggedUser(eraseSession);
    writeUserJSON(usersList);
    res.redirect('/');
  },

  viewRegister: (req, res) => {
    res.render('users/register');
  },

  loginUser: (req, res) => {
    let usersList = indexUser();
    let user = usersList.find(u => u.user_name == req.body.user_name);
    if (user && compareSync(req.body.passwd, user.passwd)) {
      user.loggedIn = true;
      writeLoggedUser(user);
    }
    writeUserJSON(usersList);
    res.redirect('/');
  },

  updateProfileDetails: (req, res) => {
    let usersList = indexUser();
    let user = usersList.find(u => u.id == req.body.id);
    if (user.id == req.body.id) {
      user.first_name = req.body.first_name;
      user.last_name = req.body.last_name;
      user.user_name = req.body.user_name;
      user.email = req.body.email;
      user.passwd =
        req.body.passwd != 0
          ? (user.passwd = hashSync(req.body.passwd, 10))
          : (user.passwd = user.passwd);
      user.isAdmin = '';
      user.avatar = !req.file ? req.body.avatar : req.file.filename;
      writeLoggedUser(user);
      writeUserJSON(usersList);
    }
    res.redirect('/user/profile');
  },

  registerUser: (req, res) => {
    let usersList = indexUser();
    let tempID = usersList.length;
    tempID++;
    let tempUser = Object({
      id: tempID,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      user_name: req.body.user_name,
      email: req.body.email,
      passwd: hashSync(req.body.passwd, 10),
      isAdmin: '',
      avatar: !req.file ? 'blank.jpg' : req.file.filename,
      loggedIn: true,
    });
    usersList.push(tempUser);
    writeLoggedUser(tempUser);
    writeUserJSON(usersList);
    res.redirect('/');
  },
};

module.exports = controllerLogin;

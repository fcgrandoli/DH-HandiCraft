const userLoggedIn = require('../views/users/userSession_JSON');
const { resolve } = require('path');
const { readFileSync, writeFileSync } = require('fs');

const controllerLogin = {
  mostrarLogin: (req, res) => {
    return res.render('users/login', {
      userLoggedIn: userLoggedIn,
    });
  },
  accountDetails: (req, res) => {
    let usersFile = resolve(__dirname, '../data', 'usersList.json');
    let usersJSON = readFileSync(usersFile);
    let usersList = JSON.parse(usersJSON);
    res.render('users/accountDetails', {
      userLoggedIn: userLoggedIn,
      usersList: usersList,
    });
  },

  closeSession: (req, res) => {
    let usersFile = resolve(__dirname, '../data', 'usersList.json');
    let usersJSON = readFileSync(usersFile);
    let usersList = JSON.parse(usersJSON);
    usersList.forEach(function (user, index) {
      if (userLoggedIn.user_name == user.user_name) {
        this[index].loggedIn = false;
      }
    }, usersList);
    userLoggedIn.loggedIn = false;
    userLoggedIn.first_name = '';
    userLoggedIn.last_name = '';
    userLoggedIn.user_name = '';
    userLoggedIn.passwd = '';

    res.redirect('/');
  },
  /* process: function(req, res) {
    res.send('validacion on');
  },*/
};

module.exports = controllerLogin;

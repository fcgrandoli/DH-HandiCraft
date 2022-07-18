const userList = require('../views/users/usersList_JSON');
const userLoggedIn = require('../views/users/userSession_JSON');

const controllerLogin = {
  mostrarLogin: (req, res) => {
    return res.render('users/login', {
      userLoggedIn: userLoggedIn,
    });
  },
  accountDetails: (req, res) => {
    res.render('users/accountDetails', {
      userLoggedIn: userLoggedIn,
      userList: userList,
    });
  },
  closeSession: (req, res) => {
    userList.forEach(function (user, index) {
      if (userLoggedIn.user_name == user.user_name) {
        this[index].loggedIn = false;
      }
    }, userList);
    userLoggedIn.loggedIn = false;
    userLoggedIn.first_name = '';
    userLoggedIn.last_name = '';
    userLoggedIn.user_name = '';
    userLoggedIn.passwd = '';

    res.redirect('/');
  },
};

module.exports = controllerLogin;

const userLoggedIn = require('../views/users/userSession_JSON');
const { indexUser } = require('../model/products.model');

const controllerLogin = {
  mostrarLogin: (req, res) => {
    return res.render('users/login', {
      userLoggedIn: userLoggedIn,
    });
  },
  accountDetails: (req, res) => {
    let usersList = indexUser();
    res.render('users/accountDetails', {
      userLoggedIn: userLoggedIn,
      usersList: usersList,
    });
  },

  closeSession: (req, res) => {
    let usersList = index();
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
};

module.exports = controllerLogin;

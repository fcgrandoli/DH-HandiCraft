const {
  indexUser,
  readLoggedUser,
  closeSession,
} = require('../model/users.model');

const controllerLogin = {
  mostrarLogin: (req, res) => {
    let userLoggedIn = readLoggedUser();
    return res.render('users/login', {
      userLoggedIn: userLoggedIn,
    });
  },
  accountDetails: (req, res) => {
    let userLoggedIn = readLoggedUser();
    res.render('users/accountDetails', {
      userLoggedIn: userLoggedIn,
    });
  },

  closeSession: (req, res) => {
    closeSession();
    res.redirect('/');
  },
};

module.exports = controllerLogin;

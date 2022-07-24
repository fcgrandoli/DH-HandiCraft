const userLoggedIn = require('../views/users/userSession_JSON');

const controllerRegister = {
  mostrarRegister: (req, res) => {
    return res.render('users/register', {
      userLoggedIn: userLoggedIn,
    });
  },
};

module.exports = controllerRegister;

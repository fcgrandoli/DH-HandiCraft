const { readLoggedUser } = require('../model/users.model');

const controllerRegister = {
  mostrarRegister: (req, res) => {
    let userLoggedIn = readLoggedUser();
    return res.render('users/register', {
      userLoggedIn: userLoggedIn,
    });
  },
};

module.exports = controllerRegister;

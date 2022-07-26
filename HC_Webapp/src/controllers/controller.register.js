const { readLoggedUser, usersList } = require('../model/users.model');

const controllerRegister = {
  mostrarRegister: (req, res) => {
    res.render('users/register');
  },
};

module.exports = controllerRegister;

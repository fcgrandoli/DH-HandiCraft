const userList = require('../views/users/usersList_JSON');
const userLoggedIn = require('../views/users/userSession_JSON');

const controllerCart = {
  mostrarCart: (req, res) => {
    return res.render('products/cart', { userLoggedIn: userLoggedIn });
  },
};

module.exports = controllerCart;

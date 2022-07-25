const controllerCart = {
  mostrarCart: (req, res) => {
    return res.render('products/cart', { userLoggedIn: userLoggedIn });
  },
};

module.exports = controllerCart;

const controllerCart = {
  mostrarCart: (req, res) => {
    return res.render('products/cart', { userLoggedIn: userLoggedIn });
  },
  /*mostrarProductosCart: (req, res) => {
    productList = indexProduct();
    userLoggedIn = readLoggedUser();
    return res.render('cart', {
      productList: productList,
      userLoggedIn: userLoggedIn,
    });
  },*/
};

module.exports = controllerCart;

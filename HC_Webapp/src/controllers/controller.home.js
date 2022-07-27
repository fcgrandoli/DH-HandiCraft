const { indexProduct, searchProduct } = require('../model/products.model');
const { indexUser, readLoggedUser } = require('../model/users.model');

const controllerHome = {
  mostrarHome: (req, res) => {
    //Llama a la funcion indexProduct() en products.model.js para armar el array de productos en productList.
    productList = indexProduct();
    //Llama a la funcion readLoggedUser en products.model.js para armar el array del usuario logueado en users.model (aunque este vacio).
    userLoggedIn = readLoggedUser();
    //Retorna la vista "home" junto a las variables declaradas productList y userLoggedIn para que la vista muestre los valores que correspondan.
    return res.render('home', {
      productList: productList,
      userLoggedIn: userLoggedIn,
    });
  },

  buscarProducto: (req, res) => {
    //Llama a la funcion indexProduct() en products.model.js para armar el array de productos en productList.
    productList = indexProduct();
    //Llama a la funcion readLoggedUser en products.model.js para armar el array del usuario logueado en users.model (aunque este vacio).
    userLoggedIn = readLoggedUser();
    //Es el contenido de la busquda (string) que hace el usuario en la barra de busqueda y lo convierte todo a minuscula para hacer la comparacion.
    let userQuery = req.query.buscar.toLowerCase();
    //Llama a la funcion searchProduct() en en products.model.js y le pasa como 1er parametro el JSON de productos y como segundo la busqueda del usuario.
    let tempProduct = searchProduct(indexProduct(), userQuery);
    //Retorna la vista "homeSearch" junto a las variables declaradas (productList, userLoggedIn y tempProduct) para que la vista muestre los valores que correspondan.
    res.render('homeSearch', {
      productList: productList,
      userLoggedIn: userLoggedIn,
      tempProduct: tempProduct,
    });
  },
};

module.exports = controllerHome;

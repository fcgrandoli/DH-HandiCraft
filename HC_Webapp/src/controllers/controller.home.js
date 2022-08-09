const { indexProduct } = require('../model/products.model');

const controllerHome = {
  mostrarHome: (req, res) => {
    //Llama a la funcion indexProduct() en products.model.js para armar el array de productos en productList.
    productList = indexProduct();
    //Retorna la vista "home" junto a las variables declaradas productList y userLoggedIn para que la vista muestre los valores que correspondan.
    return res.render('home', {
      productList: productList,
      userLoggedIn: req.session.user,
    });
  },
  searchProduct: (req, res) => {
    //Llama a la funcion indexProduct() en products.model.js para armar el array de productos en productList.
    productList = indexProduct();
    //Crea un array vacion para llenarno con los productos que cumplan la condicion de la busqueda.
    let tempProduct = [];
    //Es el contenido de la busquda (string) que hace el usuario en la barra de busqueda y lo convierte todo a minuscula para hacer la comparacion.
    let userQuery = req.query.buscar.toLowerCase();
    //Llama a la funcion searchProduct() en en products.model.js y le pasa como 1er parametro el JSON de productos y como segundo la busqueda del usuario.
    //Recorre el array de productos que viene por el 1er parametro de la funcion, por cada producto
    productList.forEach(product => {
      //Convierte el nombre del producto en minscula para poder hacer la comparacion y se fija si coincide con la busqueda del usuario.
      product.name.toLowerCase().includes(userQuery)
        ? //? es un condicional, en caso que devuelva "true" hace push del objeto al array tempProduct.
          tempProduct.push(product)
        : '';
    });
    //Retorna la vista "homeSearch" junto a las variables declaradas (productList, userLoggedIn y tempProduct) para que la vista muestre los valores que correspondan.
    res.render('homeSearch', {
      productList: productList,
      userLoggedIn: userLoggedIn,
      tempProduct: tempProduct,
    });
  },
  mostrarConstruccion: (req, res) => {
    return res.render('enConstruccion');
  },
  mostrarMantenimiento: (req, res) => {
    return res.render('enMantenimiento');
  },
};

module.exports = controllerHome;

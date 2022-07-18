const productList = require('../views/products/productList_JSON');
const userList = require('../views/users/usersList_JSON');
const userLoggedIn = require('../views/users/userSession_JSON');

const controllerProducto = {
  mostrarProducto: (req, res) => {
    let i = req.params.id;
    res.render('products/productDetail', {
      productList: productList,
      i: i,
      userLoggedIn: userLoggedIn,
    });
  },

  crearProducto: (req, res) => {
    let i = req.params.id;
    res.render('products/productCreate', {
      productList: productList,
      i: i,
      userLoggedIn: userLoggedIn,
    });
  },

  editarProducto: (req, res) => {
    if (!req.params.id) {
      res.redirect('/');
    } else {
      let i = req.params.id;
      return res.render('products/productEdit', {
        productList: productList,
        i: i,
        userLoggedIn: userLoggedIn,
      });
    }
  },

  eliminarProducto: (req, res) => {
    let i = req.params.id;
    (productList[i].name = 'DELETED'),
      (productList[i].price = 'DELETED'),
      (productList[i].disc = 'DELETED'),
      (productList[i].image = 'DELETED'),
      (productList[i].descs = 'DELETED'),
      (productList[i].descl = 'DELETED'),
      res.redirect('/');
  },

  detalleProducto: (req, res) => {
    res.send('Bienvenidos al detalle del producto: ' + req.params.id);
  },

  detalleComentario: (req, res) => {
    if (!req.params.cmt) {
      res.send(`Este articulo todavia no tiene comentarios.`);
    } else {
      res.send(
        `Bienvenidos al detalle del producto: ${req.params.id} comentario numero: ${req.params.cmt}`
      );
    }
  },
};

module.exports = controllerProducto;

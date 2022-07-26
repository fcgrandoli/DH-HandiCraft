const multer = require('multer');
const storageProduct = require('../modules/storage');
const productValidation = require('../validaciones/product');
const uploadProduct = multer({ storage: storageProduct });
module.exports = uploadProduct;

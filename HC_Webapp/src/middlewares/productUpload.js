const multer = require('multer');
const storageProduct = require('../modules/storage');
const productValidation = require('../validations/product');
const uploadProduct = multer({ storage: storageProduct });
module.exports = uploadProduct;

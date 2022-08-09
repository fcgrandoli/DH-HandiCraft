const multer = require('multer');
const storageProduct = require('../modules/storage');
const uploadProduct = multer({ storage: storageProduct });
module.exports = uploadProduct;

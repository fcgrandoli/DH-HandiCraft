const multer = require('multer');
const { extname, path } = require('path');

const storageProduct = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images');
  },
  filename: (req, file, cb) => {
    let fileName = `${file.fieldname}-${Date.now()}_img${extname(
      file.originalname
    )}`;
    cb(null, fileName);
  },
});

module.exports = storageProduct;

const multer = require('multer');
const { extname, path } = require('path');

const storageUsers = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/assets/avatars');
  },
  filename: (req, file, cb) => {
    let fileName = `${file.fieldname}-${Date.now()}_img${extname(
      file.originalname
    )}`;
    cb(null, fileName);
  },
});

module.exports = storageUsers;

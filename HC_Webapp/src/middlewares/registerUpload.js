const multer = require('multer');
const storageUser = require('../modules/upload');
const uploadUser = multer({ storage: storageUser });
module.exports = uploadUser;

const { body } = require('express-validator');
const { user } = require('../database/models/index');
const { extname, resolve } = require('path');
const { unlinkSync } = require('fs');

const validationUpdateProfile = [
  body('firstName')
    .notEmpty()
    .withMessage('El nombre no puede quedar vacío')
    .bail()
    .isLength({ min: 2 })
    .withMessage('El nombre debe contener mínimo dos caracteres.')
    .bail(),
  body('lastName')
    .notEmpty()
    .withMessage('El apellido no puede quedar vacío')
    .bail()
    .isLength({ min: 2 })
    .withMessage('El apellido debe contener mínimo dos caracteres.')
    .bail(),
  body('userName')
    .notEmpty()
    .withMessage('El usuario no puede quedar vacío')
    .bail()
    .isLength({ min: 2 })
    .withMessage('El usuario debe contener mínimo dos caracteres.')
    .bail()
    .custom(async (value, { req }) => {
      let users = await user.findOne({ where: { userName: value } });
      if (!users) {
        return true;
      } else if (users.id == req.body.id) {
        return true;
      } else {
        throw new Error('El nombre de usuario no esta disponible.');
      }
    }),
  body('email')
    .notEmpty()
    .withMessage('El email no puede quedar vacío.')
    .bail()
    .isEmail()
    .withMessage('El formato de email no es válido.')
    .bail()
    .custom(async (value, { req }) => {
      let users = await user.findOne({ where: { email: value } });
      if (users && users.id != req.body.id) {
        throw new Error('El email no esta disponible.');
      } else {
        return true;
      }
    }),
  /*body('passwd')
    .notEmpty()
    .withMessage('La contraseña no puede quedar vacía.')
    .bail()
    .isLength({ min: 4 })
    .bail(),*/
  body('avatar').custom((value, { req }) => {
    if (!req.file) {
      return true;
    } else {
      let archivos = req.file;
      let extensiones = ['.svg', '.png', '.jpg', '.jpeg', '.GIF', '.webp'];
      let avatar = archivos;
      let extension = extname(avatar.filename);

      if (!extensiones.includes(extension)) {
        unlinkSync(
          resolve(__dirname, '../../public/assets/', 'avatars', avatar.filename)
        );
        throw new Error('La imagen no tiene una extension valida');
      }

      if (avatar.size > 2097152) {
        unlinkSync(
          resolve(__dirname, '../../public/assets/', 'avatars', avatar.filename)
        );
        throw new Error('La imagen supera el peso de 2MB');
      }
      return true;
    }
  }),
];

module.exports = validationUpdateProfile;

const { body } = require('express-validator');
//const { extname, resolve } = require('path');
//const { unlinkSync } = require('fs');
const { User } = require('../database/models/users');

const register = [
  body('first_name')
    .notEmpty()
    .withMessage('El nombre no puede quedar vacío')
    .bail()
    .isLength({ min: 2 })
    .withMessage('El nombre debe contener mínimo dos caracteres.')
    .bail(),
  body('last_name')
    .notEmpty()
    .withMessage('El apellido no puede quedar vacío')
    .bail()
    .isLength({ min: 2 })
    .withMessage('El apellido debe contener mínimo dos caracteres.')
    .bail(),
  body('user_name')
    .notEmpty()
    .withMessage('El usuario no puede quedar vacío')
    .bail()
    .isLength({ min: 2 })
    .withMessage('El usuario debe contener mínimo dos caracteres.')
    .bail()
    .custom(async(value, { req }) => {
      let users = await User.findAll();
      let user = users.find(u => u.user_name == req.body.user_name);

      if (user) {
        throw new Error('El nombre de usuario no esta disponible.');
      }
      return true;
    }),
  body('email')
    .notEmpty()
    .withMessage('El email no puede quedar vacío.')
    .bail()
    .isEmail()
    .withMessage('El formato de email no es válido.')
    .bail()
    .custom(async(value) => {
      let users = await User.findAll();
      users = users.map(u => u.email);
      if (users.includes(value)) {
        throw new Error('El email ya esta registrado');
      }
      return true;
    }),
  body('passwd')
    .notEmpty()
    .withMessage('La contraseña no puede quedar vacía.')
    .bail()
    .isLength({ min: 4 })
    .bail(),
  body('avatar').custom( async (value, { req }) => {
    if (!req.file) {
      return true;
    } else {
      let archivos = req.file;
      let extensiones = ['.svg', '.png', '.jpg', '.jpeg'];
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

module.exports = register;

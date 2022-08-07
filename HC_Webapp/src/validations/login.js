const { body } = require('express-validator');
const { indexUser } = require('../model/users.model');
const { compareSync } = require('bcryptjs');

const login = [
  // Email
  body('user_name')
    .notEmpty()
    .withMessage('El usuario no puede quedar vacío.')
    .bail()
    .isEmail()
    .withMessage('El formato de usuario no es válido.')
    .bail()
    .custom(value => {
      let users = indexUser();
      users = users.map(u => u.email);
      if (!users.includes(value)) {
        throw new Error('El usuario no esta registrado');
      }
      return true;
    }),
  // Password
  body('passwd')
    .notEmpty()
    .withMessage('La contraseña no puede quedar vacía.')
    .bail()
    .isLength({ min: 4 })
    .bail()
    .custom((value, { req }) => {
      let { email } = req.body;
      let users = indexUser();
      let user = users.find(u => u.email === email);

      if (!user) {
        throw new Error('Usuario no encontrado');
      }

      if (!compareSync(value, user.password)) {
        throw new Error('La contraseña es incorrecta');
      }

      return true;
    }),
];

module.exports = login;

const { body } = require('express-validator');
const { indexUser } = require('../model/users.model');
const { compareSync } = require('bcryptjs');

const login = [
  // Email
  body('user_name')
    .notEmpty()
    .withMessage('El usuario no puede quedar vacío.')
    .bail()
    .bail()
    .custom(value => {
      let users = indexUser();
      users = users.map(u => u.user_name);
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
    .isLength({ min: 3 })
    .bail()
    .custom((value, { req }) => {
      let users = indexUser();
      let user = users.find(u => u.user_name == req.body.user_name);

      if (!user) {
        throw new Error('Usuario no encontrado');
      }

      if (!compareSync(value, user.passwd)) {
        throw new Error('La contraseña es incorrecta');
      }

      return true;
    }),
];

module.exports = login;

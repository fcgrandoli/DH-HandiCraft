const { body } = require('express-validator');
// const { User } = require('../database/models/users'); 
const { compareSync } = require('bcryptjs');
const { indexUser } = require('../model/users.model');

const login = [
  // Email
  body('userName')
    .notEmpty()
    .withMessage('El usuario no puede quedar vacío.')
    .bail()
    .bail()
    .custom(async (value) => {
      let users = indexUser();
      users = users.map(u => u.userName);
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
    .custom(async(value, { req }) => {
      let users = indexUser();
      let user = users.find(u => u.userName == req.body.userName);

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

const { body } = require('express-validator');
const { user } = require('../database/models/index');
const { compareSync } = require('bcryptjs');

const login = [
  // User
  body('userName')
    .notEmpty()
    .withMessage('El usuario no puede quedar vacío')
    .bail()
    .custom(async (value, { req }) => {
      let users = await user.findOne({
        where: {
          userName: req.body.userName,
        },
      });
      if (!users) {
        throw new Error('El usuario no esta registrado');
      }
      return true;
    }),
  // Password
  body('passwd')
    .notEmpty()
    .withMessage('La contraseña no puede quedar vacía')
    .bail()
    .isLength({ min: 3 })
    .bail()
    .custom(async (value, { req }) => {
      let users = await user.findOne({
                where: {
          userName: req.body.userName,
        },
      });
      if (!users) {
        throw new Error('Usuario no encontrado');
      }
      if (!compareSync(req.body.passwd, users.passwd)) {
        throw new Error('La contraseña es incorrecta');
      }
      return true;
    }),
];

module.exports = login;

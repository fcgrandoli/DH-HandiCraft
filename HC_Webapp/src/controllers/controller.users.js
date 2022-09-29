const { user } = require('../database/models/index');
const { validationResult } = require('express-validator');
const { hashSync } = require('bcryptjs');

const controllerLogin = {
  viewLogin: async (req, res) => {
    let validaciones = validationResult(req);
    let { errors } = validaciones;
    return res.render('users/login', {
      errors: validaciones.mapped(),
    });
  },
  viewProfileDetails: async (req, res) => {
    let userLoggedIn = await user.findByPk(req.session.user.id);
    let validaciones = validationResult(req);
    let { errors } = validaciones;
    res.render('users/accountDetails', {
      userLoggedIn: userLoggedIn,
      oldData: req.body,
      errors: validaciones.mapped(),
    });
  },

  closeSession: async (req, res) => {
    res.clearCookie('HC');
    delete req.session.user;
    res.redirect('/');
  },

  viewRegister: async (req, res) => {
    let validaciones = validationResult(req);
    let { errors } = validaciones;
    res.render('users/register', {
      errors: validaciones.mapped(),
    });
  },

  updateProfileDetails: async (req, res) => {
    let validaciones = validationResult(req);
    let { errors } = validaciones;
    if (errors && errors.length > 0) {
      return res.render('users/accountDetails', {
        styles: ['users/accountDetails'],
        oldData: req.body,
        errors: validaciones.mapped(),
      });
    } else {
      let userIMG = await user.findByPk(req.body.id);
      if(req.body.passwd != 0){
        let tempUser = await Object({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          userName: req.body.userName,
          email: req.body.email,
          passwd: hashSync(req.body.passwd, 10),
          avatar: !req.file ? userIMG.avatar : req.file.filename,
        });
        await user.update(tempUser, {
          where: {
            id: req.body.id,
          },
        });
        req.session.user = await user.findByPk(req.body.id);
        res.redirect('/');
      } else {
      let tempUser = await Object({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        avatar: !req.file ? userIMG.avatar : req.file.filename,
      });
      
      await user.update(tempUser, {
        where: {
          id: req.body.id,
        },
      });
      req.session.user = await user.findByPk(req.body.id);
      res.redirect('/');
    }
    }
  },
  loginUser: async (req, res) => {
    let validaciones = validationResult(req);
    let { errors } = validaciones;
    if (errors && errors.length > 0) {
      return res.render('users/login', {
        styles: ['users/login'],
        oldData: req.body,
        errors: validaciones.mapped(),
      });
    } else {
      let usersList = await user.findOne({
        where: {
          userName: req.body.userName,
        },
      });
      if (req.body.remindme) {
        res.cookie('HC', usersList.id, { maxAge: 6000000 });
      }
      req.session.user = usersList;
      res.redirect('/');
     
    }
  },
  registerUser: async (req, res) => {
    let validaciones = validationResult(req);
    let { errors } = validaciones;
    if (errors && errors.length > 0) {
      return res.render('users/register', {
        styles: ['users/register'],
        oldData: req.body,
        errors: validaciones.mapped(),
      });
    } else {
      let tempUser = Object({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        passwd: hashSync(req.body.passwd, 10),
        isAdmin: false,
        avatar: !req.file ? 'blank.jpg' : req.file.filename,
      });
      //req.body.isAdmin = string(req.body.userName).toLocaleLowerCase().includes('@hc') //verificamos si es ADMIN
      await user.create(tempUser);
      req.session.user = await user.findOne({
        where: {
          userName: tempUser.userName,
        },
      });
      res.redirect('/');
    }
  },
};

module.exports = controllerLogin;

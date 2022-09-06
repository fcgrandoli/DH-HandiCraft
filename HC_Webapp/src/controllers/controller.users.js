const { user } = require("../database/models/index");
const { validationResult } = require("express-validator");
const { hashSync } = require("bcryptjs");
const { compareSync } = require("bcryptjs");
const { indexUser } = require("../model/users.model");

const controllerLogin = {
  viewLogin: async (req, res) => {
    let validaciones = validationResult(req);
    let { errors } = validaciones;
    return res.render("users/login", {
      errors: validaciones.mapped(),
    });
  },
  viewProfileDetails: async (req, res) => {
    res.render("users/accountDetails", {});
  },

  closeSession: async (req, res) => {
    res.clearCookie("HC_Cookie");
    delete req.session.user;
    res.redirect("/");
  },

  viewRegister: async (req, res) => {
    let validaciones = validationResult(req);
    let { errors } = validaciones;
    res.render("users/register", {
      errors: validaciones.mapped(),
    });
  },

  updateProfileDetails: (req, res) => {
    let usersList = indexUser();
    let user = usersList.find((u) => u.id == req.body.id);
    if (user.id == req.body.id) {
      user.firstNameame = req.body.firstNameame;
      user.lastName = req.body.lastName;
      user.userName = req.body.userName;
      user.email = req.body.email;
      user.passwd =
        req.body.passwd != 0
          ? (user.passwd = hashSync(req.body.passwd, 10))
          : (user.passwd = user.passwd);
      user.isAdmin = "";
      user.avatar = !req.file ? req.body.avatar : req.file.filename;
      writeUserJSON(usersList);
      req.session.user = user;
      userLoggedIn = req.session.user;
    }
    res.redirect("/user/profile");
  },
  loginUser: async (req, res) => {
    /*     let validaciones = validationResult(req);
    let { errors } = validaciones;
    if (errors && errors.length > 0) {
      return res.render("users/login", {
        styles: ["users/login"],
        oldData: req.body,
        errors: validaciones.mapped(),
      });
    } else {
      let usersList = indexUser();
      let user = usersList.find((u) => u.userName == req.body.userName);
      if (user && compareSync(req.body.passwd, user.passwd)) {
        user.loggedIn = true;
        req.session.user = user;
        userLoggedIn = req.session.user;
      }
      if (req.body.remindme) {
        res.cookie("HC_Cookie", user.userName, { maxAge: 60000 });
      }
      writeUserJSON(usersList); */

    let users = await user.findAll();
    // return res.redirect("/");
    
  },
  registerUser: async (req, res) => {
    let validaciones = validationResult(req);
    let { errors } = validaciones;
    if (errors && errors.length > 0) {
      return res.render("users/register", {
        styles: ["users/register"],
        oldData: req.body,
        errors: validaciones.mapped(),
      });
    }

    //req.body.isAdmin = string(req.body.userName).toLocaleLowerCase().includes('@hc') //verificamos si es ADMIN

     await user.create(req.body);

    let usersList = indexUser();
    let tempID = usersList.length;
    tempID++;
    let tempUser = Object({
      id: tempID,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      email: req.body.email,
      passwd: hashSync(req.body.passwd, 10),
      isAdmin: "",
      avatar: !req.file ? "blank.jpg" : req.file.filename,
      loggedIn: true,
    });
    usersList.push(tempUser);
    // writeUserJSON(usersList);
    req.session.user = userLoggedIn = tempUser;
    res.redirect("/");
 // res.send(req.body)
  },
};

module.exports = controllerLogin;

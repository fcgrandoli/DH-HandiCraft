const { user } = require("../database/models/index");
const { validationResult } = require("express-validator");
const { hashSync } = require("bcryptjs");
const { compareSync } = require("bcryptjs");
const { indexUser } = require("../model/users.model");
const { Op } = require("sequelize");

const controllerLogin = {
  viewLogin: async (req, res) => {
    let validaciones = validationResult(req);
    let { errors } = validaciones;
    return res.render("users/login", {
      errors: validaciones.mapped(),
    });
  },
  viewProfileDetails: async (req, res) => {
    res.render("users/accountDetails", { userLoggedIn: userLoggedIn });
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

  updateProfileDetails: async (req, res) => {
    let userToUpdate = await user.findByPk(req.body.id);

    await user
      .update(req.body, {
        where: {
          id: req.body.id,
        },
      })
      .then((req.session.user = userLoggedIn = userToUpdate));

    /*    let usersList = indexUser();
    let user = usersList.find((u) => u.id == req.body.id);
    if (user.id == req.body.id) {
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.userName = req.body.userName;
      user.email = req.body.email;
      user.passwd =
        req.body.passwd != 0
          ? (user.passwd = hashSync(req.body.passwd, 10))
          : (user.passwd = user.passwd);
      user.isAdmin = "";
      user.avatar = !req.file ? req.body.avatar : req.file.filename;
      //   writeUserJSON(usersList);
      req.session.user = user;
      userLoggedIn = req.session.user;
    } */
    //res.send(req.session.user);
    res.redirect("/");
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
    } else { */
    let usersList = await user.findAll({
      include: {
        all: true,
      },
      where: {
        userName: {
          [Op.like]: `%${req.body.userName}%`,
        },
      },
    });
    req.session.user = userLoggedIn = usersList;
    if (req.body.remindme) {
      res.cookie("HC_Cookie", usersList.userName, { maxAge: 60000 });
    }
    res.send(userLoggedIn);
    //return res.redirect("/");
    //}
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
    });
    usersList.push(tempUser);
    // writeUserJSON(usersList);
    req.session.user = userLoggedIn = tempUser;
    res.redirect("/");
    // res.send(req.body)
  },
};

module.exports = controllerLogin;

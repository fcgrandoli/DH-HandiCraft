const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');
const { hashSync } = require('bcryptjs');

const usersModel = {
  indexUser: function () {
    let usersFile = resolve(__dirname, '../data', 'usersList.json');
    let usersJSON = readFileSync(usersFile);
    return JSON.parse(usersJSON);
  },
  readLoggedUser: function () {
    let loggedUser = resolve(__dirname, '../data', 'userSession.json');
    let userJSON = readFileSync(loggedUser);
    return JSON.parse(userJSON);
  },
  writeLoggedUser: function (data) {
    let loggedUser = resolve(__dirname, '../data', 'userSession.json');
    let update = JSON.stringify(data, null, 2);
    writeFileSync(loggedUser, update);
    return Object({
      first_name: data.first_name,
      last_name: data.last_name,
      user_name: data.user_name,
      email: data.email,
      passwd: data.passwd,
      isAdmin: data.isAdmin,
      avatar: data.avatar,
      loggedIn: data.loggedIn,
    });
  },
  closeSession: function () {
    let loggedUser = resolve(__dirname, '../data', 'userSession.json');
    let eraseSession = Object({
      id: '',
      first_name: '',
      last_name: '',
      user_name: '',
      email: '',
      passwd: '',
      isAdmin: '',
      avatar: '',
      loggedIn: false,
    });
    let update = JSON.stringify(eraseSession, null, 2);
    writeFileSync(loggedUser, update);
  },
  createUser: function (data, imageName) {
    let usersList = usersModel.indexUser();
    let tempID = usersList.length;
    tempID++;
    return Object({
      id: tempID,
      first_name: data.first_name,
      last_name: data.last_name,
      user_name: data.user_name,
      email: data.email,
      //passwd: hashSync(data.passwd, 10),
      passwd: data.passwd,
      isAdmin: data.isAdmin == undefined ? '' : data.isAdmin,
      avatar: imageName,
      loggedIn: true,
    });
  },
  loginUser: function (data) {
    let usersList = usersModel.indexUser();
    usersList.forEach(user => {
      if (data.user_name == user.user_name && data.passwd == user.passwd) {
        user.loggedIn = true;
        usersModel.writeLoggedUser(user);
      }
    });
  },
  updateUser: function (actualUser, imageName) {
    let usersList = usersModel.indexUser();
    let userLoggedIn = usersModel.readLoggedUser();
    usersList.forEach(function (user, index) {
      if (actualUser.id == user.id) {
        this[index].first_name = actualUser.first_name;
        this[index].last_name = actualUser.last_name;
        this[index].user_name = actualUser.user_name;
        this[index].email = actualUser.email;
        this[index].passwd = actualUser.passwd;
        this[index].isAdmin = actualUser.isAdmin;
        this[index].avatar = !imageName ? actualUser.avatar : imageName;
        //this[index].passwd = hashSync(actualUser.passwd, 10);
        userLoggedIn.first_name = actualUser.first_name;
        userLoggedIn.last_name = actualUser.last_name;
        userLoggedIn.user_name = actualUser.user_name;
        userLoggedIn.email = actualUser.email;
        userLoggedIn.passwd = actualUser.passwd;
        userLoggedIn.isAdmin = actualUser.isAdmin;
        userLoggedIn.avatar = !imageName ? actualUser.avatar : imageName;
        //userLoggedIn.passwd = hashSync(actualUser.passwd, 10);
        userLoggedIn.loggedIn = this[index].loggedIn;
        usersModel.writeLoggedUser(user);
      }
    }, usersList);
    usersModel.writeUserJSON(usersList);
  },
  writeUserJSON: function (data) {
    let usersFile = resolve(__dirname, '../data', 'usersList.json');
    let update = JSON.stringify(data, null, 2);
    return writeFileSync(usersFile, update);
  },
};

module.exports = usersModel;

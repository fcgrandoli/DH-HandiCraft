const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');
const { hashSync } = require('bcryptjs');
const { CLIENT_RENEG_LIMIT } = require('tls');

const usersModel = {
  indexUser: function () {
    let usersFile = resolve(__dirname, '../data', 'usersList.json');
    let usersJSON = readFileSync(usersFile);
    return JSON.parse(usersJSON);
  },

  writeUserJSON: function (data) {
    let usersFile = resolve(__dirname, '../data', 'usersList.json');
    let update = JSON.stringify(data, null, 2);
    return writeFileSync(usersFile, update);
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
      id: data.id,
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
};

module.exports = usersModel;

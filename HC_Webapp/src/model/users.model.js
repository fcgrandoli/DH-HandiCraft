const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');
const { hashSync } = require('bcryptjs');
const userLoggedIn = require('../views/users/userSession_JSON');

const usersModel = {
  indexUser: function () {
    let usersFile = resolve(__dirname, '../data', 'usersList.json');
    let usersJSON = readFileSync(usersFile);
    return JSON.parse(usersJSON);
  },
  createUser: function (data) {
    let usersList = usersModel.index();
    let tempID = usersList.length;
    tempID++;
    let tempUser = {
      id: tempID,
      first_name: data.first_name,
      last_name: data.last_name,
      user_name: data.user_name,
      passwd: hashSync(data.passwd, 10),
      role: '',
      loggedIn: false,
    };
    usersList.push(tempUser);
    usersModel.write(usersList);
  },
  writeUserJSON: function (data) {
    let usersFile = resolve(__dirname, '../data', 'usersList.json');
    let update = JSON.stringify(data, null, 2);
    return writeFileSync(usersFile, update);
  },
};

module.exports = usersModel;

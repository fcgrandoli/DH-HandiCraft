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
};

module.exports = usersModel;

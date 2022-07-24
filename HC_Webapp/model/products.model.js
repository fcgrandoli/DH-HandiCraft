const { readFileSync, writeFileSync } = require('fs');
/* const {resolve}= require('path');
const {hashSync} = require('bcryptjs') */
const products = {
  index: function () {
    let file = resolve(__dirname, '../data', 'productList.json');
    let data = readFileSync(file);
    return JSON.parse(data);
  },
  one: function (id) {
    let file = resolve(__dirname, '../data', 'users.json');
    let data = readFileSync(file);
    let users = JSON.parse(data);
    return users.find(user => user.id === id);
  },
  create: function (data) {
    let file = resolve(__dirname, '../data', 'users.json');
    let info = readFileSync(file);
    let users = JSON.parse(info);
    let last = users[users.length - 1];
    return Object({
      id: users.length == 0 ? 1 : last.id + 1,
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email,
      password: hashSync(data.password, 10),
      image: data.image,
      isAdmin: data.email.includes('@dh.com'),
    });
  },
  write: function (data) {
    let file = resolve(__dirname, '../data', 'users.json');
    let info = JSON.stringify(data, null, 2);
    return writeFileSync(file, info);
  },
};

module.exports = products;

const { resolve } = require('path');
const { readFileSync, writeFileSync } = require('fs');

let file = resolve(__dirname, './data', 'usersList.json');
let info = readFileSync(file);
let users = JSON.parse(info);

//console.log(users);
let newUser = {
  id: 5,
  first_name: 'asd',
  last_name: 'asd',
  user_name: 'asd',
  passwd: '1',
  role: 'admin',
  loggedIn: false,
};

users.push(newUser);
let write = JSON.stringify(users, null, 2);
writeFileSync(file, write);

console.log(users);

//console.log(info);

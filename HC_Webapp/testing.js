/* const { resolve } = require('path');
const { readFileSync, writeFileSync } = require('fs');

let file = resolve(__dirname, './data', 'usersList.json');
let info = readFileSync(file);
let users = JSON.parse(info); */

//console.log(users);
let users = [
  {
    id: 1,
    first_name: 'Carolina',
    last_name: 'Shlain',
    user_name: 'cshlain',
    passwd: '123',
    role: 'admin',
    loggedIn: false,
  },
  {
    id: 2,
    first_name: 'Shirel',
    last_name: 'Lalo',
    user_name: 'slalo',
    passwd: '123',
    role: 'admin',
    loggedIn: false,
  },
  {
    id: 3,
    first_name: 'Fernando',
    last_name: 'Grandoli',
    user_name: 'fgrandoli',
    passwd: '123',
    role: 'admin',
    loggedIn: false,
  },
];

/* users.push(newUser);
let write = JSON.stringify(users, null, 2);
writeFileSync(file, write);
 */
let change = users.find(u => u.id == 2);
let index = users.findIndex(u => u.id == 4);
console.log(index);

//console.log(info);

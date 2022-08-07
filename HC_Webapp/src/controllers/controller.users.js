const {
  indexUser,
  readLoggedUser,
  writeLoggedUser,
  writeUserJSON,
} = require('../model/users.model');

const controllerLogin = {
  viewLogin: (req, res) => {
    let userLoggedIn = readLoggedUser();
    return res.render('users/login', {
      userLoggedIn: userLoggedIn,
    });
  },
  viewProfileDetails: (req, res) => {
    let userLoggedIn = readLoggedUser();
    res.render('users/accountDetails', {
      userLoggedIn: userLoggedIn,
    });
  },

  updateProfileDetails: (req, res) => {
    if (!req.file) {
      controllerLogin.updateUser(req.body);
    } else {
      controllerLogin.updateUser(req.body, req.file.filename);
    }
    res.redirect('/');
  },

  closeSession: (req, res) => {
    let usersList = indexUser();
    let loggedUser = readLoggedUser();
    usersList.forEach(user => {
      if (loggedUser.id == user.id) {
        user.loggedIn = false;
        controllerLogin.updateUser(user);
      }
    }, usersList);
    let eraseSession = Object({
      id: '',
      first_name: '',
      last_name: '',
      user_name: '',
      email: '',
      passwd: '',
      isAdmin: '',
      avatar: '',
      loggedIn: '',
    });
    writeLoggedUser(eraseSession);
    res.redirect('/');
  },

  viewRegister: (req, res) => {
    res.render('users/register');
  },

  loginUser: (req, res) => {
    let usersList = indexUser();
    usersList.forEach(user => {
      if (
        req.body.user_name == user.user_name &&
        req.body.passwd == user.passwd
      ) {
        user.loggedIn = true;
        controllerLogin.updateUser(user);
        writeLoggedUser(user);
      }
    }, usersList);
    res.redirect('/');
  },
  updateUser: function (actualUser, imageName) {
    let usersList = indexUser();
    usersList.forEach(function (user, index) {
      if (user.id == actualUser.id) {
        this[index].first_name = actualUser.first_name;
        this[index].last_name = actualUser.last_name;
        this[index].user_name = actualUser.user_name;
        this[index].email = actualUser.email;
        this[index].passwd = actualUser.passwd;
        //this[index].passwd = hashSync(actualUser.passwd, 10);
        this[index].isAdmin = '';
        this[index].avatar = !imageName ? actualUser.avatar : imageName;
        this[index].loggedIn = actualUser.loggedIn;
        actualUser.loggedIn == undefined ? (this[index].loggedIn = true) : '';
        writeLoggedUser(this[index]);
      }
    }, usersList);
    writeUserJSON(usersList);
  },

  registerUser: (req, res) => {
    let usersList = indexUser();
    let tempID = usersList.length;
    let imageName = '';
    tempID++;
    if (!req.file) {
      imageName = 'blank.jpg';
    } else {
      imageName = req.file.filename;
    }
    let tempUser = Object({
      id: tempID,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      user_name: req.body.user_name,
      email: req.body.email,
      //passwd: hashSync(data.passwd, 10),
      passwd: req.body.passwd,
      isAdmin: '',
      avatar: imageName,
      loggedIn: true,
    });
    usersList.push(tempUser);
    writeLoggedUser(tempUser);
    writeUserJSON(usersList);
    res.redirect('/');
  },
};

module.exports = controllerLogin;

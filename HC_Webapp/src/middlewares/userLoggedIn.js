const { user } = require('../database/models/index');

module.exports = async (req, res, next) => {
  let userLoggedIn = null;
  res.locals.userLoggedIn = userLoggedIn;
  if (req.cookies && req.cookies.HC) {
    let users = await user.findOne({
      where: {
        id: req.cookies.HC,
      },
    });
    req.session.user = users;
  }
  if (req.session && req.session.user) {
    userLoggedIn = req.session.user
  }
  res.locals.userLoggedIn = userLoggedIn;
  
  return next();
};

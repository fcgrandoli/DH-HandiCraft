module.exports = (req, res, next) => {
  let userLoggedIn = null;

  if (req.cookies && req.cookies.user_name) {
    userLoggedIn = req.session.user;
  }
  if (req.session && req.session.user) {
    userLoggedIn = req.session.user;
  }
  res.locals.userLoggedIn = userLoggedIn;

  return next();
};

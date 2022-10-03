module.exports = (req, res, next) => {
  if (req.session.user.isAdmin) {
    return next();
  } else {
    res.redirect('/');
  }
};


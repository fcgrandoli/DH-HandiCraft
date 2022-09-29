function authMiddleware(req, res, next) {
  if (req.session.user != undefined) {
    next();
  } else {
    res.redirect('/user/viewRegister')
  }
}
module.exports = authMiddleware;

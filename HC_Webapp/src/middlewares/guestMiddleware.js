function guestMiddleware(req, res, next) {
  if (req.session.user == undefined) {
    next();
  } else {
    res.send('Solo para usuarios no registrados.');
  }
}
module.exports = guestMiddleware;

function guestMiddleware(req, res, next) {
  if (req.session.user == undefined) {
    next();
  } else {
    res.send('Solo para invitados');
  }
}
module.exports = guestMiddleware;

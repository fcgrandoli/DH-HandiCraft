const { indexUser } = require('../model/users.model');
function remindSession(req, res, next) {
  if (req.cookies.HC_Cookie != undefined && req.session.user == undefined) {
    let usersList = indexUser();
    let user = usersList.find(u => u.user_name == req.cookies.HC_Cookie);
    req.session.user = user;
    userLoggedIn = user;
    res.locals.userLoggedIn = userLoggedIn;
  }
  next();
}
module.exports = remindSession;

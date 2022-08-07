const { indexUser } = require('../model/users.model');
module.exports = (req, res, next) => {
  let user = null;

  if (req.session && req.session.user) {
    user = req.session.user;
  }

  res.locals.user = user;

  return next();
};

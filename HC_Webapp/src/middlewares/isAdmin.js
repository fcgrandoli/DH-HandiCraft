module.exports = (req, res, next) => {
  if (req.session.user.isAdmin) {
    return next();
  } else {
    res.redirect('/');
  }
};

//http://localhost:3000/viewProduct/createProduct

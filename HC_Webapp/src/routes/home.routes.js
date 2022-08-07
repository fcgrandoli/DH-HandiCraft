const express = require('express');
const router = express.Router();
const controllerHome = require('../controllers/controller.home.js');

router.get('/', controllerHome.mostrarHome);

router.get('/enConstruccion', controllerHome.mostrarConstruccion);

router.get('/buscar', controllerHome.searchProduct);

router.get('/session', (req, res) => {
  if (req.session.visitas == undefined) {
    req.session.visitas = 0;
  }
  req.session.visitas++;
  res.send('Session tiene:' + req.session.visitas);
});

module.exports = router;

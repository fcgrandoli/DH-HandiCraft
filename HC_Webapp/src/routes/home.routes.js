const express = require("express");
const router = express.Router();
const controllerHome = require("../controllers/controller.home.js");

router.get("/", controllerHome.mostrarHome);

router.get("/acerca", controllerHome.acerca);

router.get("/categorias", controllerHome.searchProductByCollection); 

router.get("/buscar", controllerHome.searchProduct);

module.exports = router;

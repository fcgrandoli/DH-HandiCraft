const express = require("express");
const router = express.Router();
const controllerHome = require("../controllers/controller.home.js");

router.get("/", controllerHome.mostrarHome);

router.get("/enMantenimiento", controllerHome.mostrarMantenimiento);

router.get("/buscar", controllerHome.searchProduct);

router.get("/collectionList", controllerHome.categorias); 

router.get("/categorias", controllerHome.searchProductByCollection);   

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  viewProduct,
  viewEditProduct,
  viewCreateProduct,
  createProduct,
  updateProduct,
  removeProduct,
} = require("../controllers/controller.product.js");
const uploadProduct = require("../middlewares/productUpload.js");
const validationProduct = require("../validations/product");
const authMiddleware = require("../middlewares/authMiddleware.js");
const guestMiddleware = require("../middlewares/guestMiddleware.js");

router.get("/", viewProduct);

router.get("/:id/mostrar", viewProduct);

router.get("/:id/editar", authMiddleware, validationProduct, viewEditProduct);

router.post(
  "/edit",
  authMiddleware,
  validationProduct,
  uploadProduct.single("image"),
  updateProduct
);

router.get("/createProduct", authMiddleware, viewCreateProduct);

router.post(
  "/createProduct",
  authMiddleware,
  /*validationProduct,*/
  uploadProduct.single("image"),
  createProduct
);

router.post("/:id", /*authMiddleware,*/ removeProduct);

module.exports = router;

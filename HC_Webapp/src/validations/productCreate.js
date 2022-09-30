const { body } = require("express-validator");
const { extname, resolve } = require("path");
const { unlinkSync } = require("fs");
const validationProduct = [
  body("name")
    .notEmpty()
    .withMessage("Este campo no puede quedar vacío")
    .bail()
    .isLength({ min: 5 })
    .withMessage("Este campo debe contener mínimo cinco caracteres")
    .bail(),
  body("descShort")
    .notEmpty()
    .withMessage("Este campo no puede quedar vacío")
    .bail()
    .isLength({ min: 10 })
    .withMessage("Este campo debe contener mínimo 10 caracteres")
    .bail(),
  body("descLarge")
    .notEmpty()
    .withMessage("Este campo no puede quedar vacío")
    .bail()
    .isLength({ min: 20 })
    .withMessage("Este campo debe contener mínimo 20 caracteres")
    .bail(),
  body("price")
    .notEmpty()
    .withMessage("Este campo no puede quedar vacío")
    .bail()
    .isLength({ min: 2 })
    .withMessage("Este campo debe contener mínimo 2 caracteres")
    .bail(),
  body("image").custom((value, { req }) => {
    if (!req.file) {
      throw new Error("No se subió ninguna imagen");
    }
    let archivos = req.file;
    let extensiones = [".svg", ".png", ".jpg", ".jpeg", ".GIF", ".webp"];
    let producto = archivos;
    let extension = extname(producto.filename);
    if (!extensiones.includes(extension)) {
      unlinkSync(
        resolve(__dirname, "../../public/", "images", producto.filename)
      );
      throw new Error("Formato inválido");
    }

    if (producto.size > 2097152) {
      unlinkSync(
        resolve(__dirname, "../../public/", "images", producto.filename)
      );
      throw new Error("La imagen supera el peso de 2MB");
    }
    return true;
  }),
];

module.exports = validationProduct;

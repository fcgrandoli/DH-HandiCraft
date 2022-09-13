const { body } = require("express-validator");
const { extname, resolve } = require("path");
const { unlinkSync } = require("fs");
const validationProduct = [
  body("name")
    .notEmpty()
    .withMessage("El nombre no puede quedar vacío")
    .bail()
    .isLength({ min: 5 })
    .withMessage("El nombre debe contener mínimo cinco caracteres.")
    .bail(),
  body("descShort")
    .notEmpty()
    .withMessage("La descripcion no puede quedar vacía")
    .bail()
    .isLength({ min: 2 })
    .withMessage("La descripcion debe contener mínimo dos caracteres.")
    .bail(),
  body("descLarge")
    .notEmpty()
    .withMessage("La descripcion no puede quedar vacía")
    .bail()
    .isLength({ min: 20 })
    .withMessage("La descripcion debe contener mínimo veinte caracteres.")
    .bail(),
  body("price")
    .notEmpty()
    .withMessage("El precio no puede quedar vacío")
    .bail()
    .isLength({ min: 2 })
    .withMessage("El precio debe contener mínimo dos caracteres.")
    .bail(),
  body("image").custom((value, { req }) => {
    if (!req.file && req.body.imagepath) {
      return true;
      throw new Error("No se subio ninguna imagen");
    }
    let archivos = req.file;
    let extensiones = [".svg", ".png", ".jpg", ".jpeg", '.GIF'];
    let producto = archivos;
    let extension = extname(producto.filename);
    if (!extensiones.includes(extension)) {
      unlinkSync(
        resolve(__dirname, "../../public/assets/", "avatars", producto.filename)
      );
      throw new Error("La imagen no tiene una extension valida");
    }

    if (producto.size > 2097152) {
      unlinkSync(
        resolve(__dirname, "../../public/assets/", "avatars", producto.filename)
      );
      throw new Error("La imagen supera el peso de 2MB");
    }
    return true;
  }),
];

module.exports = validationProduct;

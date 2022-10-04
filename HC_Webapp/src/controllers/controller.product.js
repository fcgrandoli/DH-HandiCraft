const { product, image, imagesProducts } = require("../database/models/index");

const { validationResult } = require("express-validator");

const controllerProducto = {
  viewProduct: async (req, res) => {
    let productList = await product.findByPk(req.params.id, {
      include: { all: true },
    });
    res.render("products/productDetail", {
      productList: productList,
    });
  },

  viewCreateProduct: async (req, res) => {
    let validaciones = validationResult(req);
    res.render("products/productCreate", {
      errors: validaciones.mapped(),
    });
  },

  viewEditProduct: async (req, res) => {
    if (!req.params) {
      res.redirect("/");
    } else {
      let validaciones = validationResult(req);
      let { errors } = validaciones;
      let productList = await product.findByPk(req.params.id, {
        include: {
          all: true,
        },
      });
      return res.render("products/productEdit", {
        productList: productList,
        errors: validaciones.mapped(),
      });
    }
  },

  createProduct: async (req, res) => {
    let validaciones = validationResult(req);
    let { errors } = validaciones;
    if (errors && errors.length > 0) {
      return res.render("products/productCreate", {
        styles: ["products/productCreate"],
        oldData: req.body,
        errors: validaciones.mapped(),
      });
    }
    let newProduct = await product.create(req.body);
    if (req.file) {
      let images = await image.create({
        path: req.file.filename,
      });

      await imagesProducts.create({
        product: newProduct.id,
        image: images.id,
      });
    }
    return res.redirect("/viewProduct/" + newProduct.id + "/mostrar");
  },

  updateProduct: async (req, res) => {
    let productList = await product.findByPk(req.body.id, {
      include: {
        all: true,
      },
    });

    let validaciones = validationResult(req);
    let { errors } = validaciones;
    if (errors && errors.length > 0) {
      return res.render("products/productEdit", {
        styles: ["products/productEdit"],
        productList: productList,
        errors: validaciones.mapped(),
      });
    }
    await product.update(req.body, {
      where: {
        id: req.body.id,
      },
    });
    if (req.file) {
      await image.update(
        {
          path: req.file.filename,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      );
    }
    res.redirect("/viewProduct/" + req.body.id + "/mostrar");
  },

  removeProduct: async (req, res) => {
    let productRemove = await product.findByPk(req.params.id);
    if (!productRemove) {
      return res.redirect("/");
    } else {
      await imagesProducts.destroy({ where: { id: req.params.id } }),
        await image.destroy({ where: { id: req.params.id } }),
        await product.destroy({ where: { id: req.params.id } });
      return res.redirect("/");
    }
  },
  removeProductDash: async (req, res) => {
    let productRemove = await product.findByPk(req.params.id);
    if (!productRemove) {
      return res.redirect("/");
    } else {
      await imagesProducts.destroy({ where: { id: req.params.id } }),
        await image.destroy({ where: { id: req.params.id } }),
        await product.destroy({ where: { id: req.params.id } });
      return res.redirect("http://127.0.0.1:5173/products");
    }
  },
};

module.exports = controllerProducto;

const { user, image } = require('../../database/models');
const { Op } = require("sequelize");


const userApi = {
    list: async (req, res) => {
      try {
        let result = [];
        let users = await user.findAll({
            include: {
                all: true
            }
        });
        result.push({
          'Cantidad total de usuarios': users.length,
          Usuarios: users
        });
        if (result) {
          return res.status(200).json(result);
        } else {
          return res.status(404).json('No hay usuarios.');
        }
      } catch (error) {
        return res.status(500).json(error);
      }
    },
    detail: async (req, res) => {
      try {
        let userDB = await user.findByPk(req.params.id, {
          include: {
            all: true,
          },
        });
        if (userDB) {
          return res.status(200).json(userDB);
        } else {
          return res.status(404).json("Este usuario no existe.");
        }
      } catch (error) {
        return res.status(500).json(error);
    }
  }
  }




module.exports = userApi
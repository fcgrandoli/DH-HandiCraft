const { user, image } = require('../../database/models');
const { Op } = require("sequelize");


const userApi = {
  list: async (req, res) => {
    try {
      let result = [];
      let count = await user.findAll({
        include: {
          all: true
        },
      })

      let data = count.map(user => Object({
        id: user.id,
        Nombre: user.firstName,
        Email: user.email,
        Detalle: "http://localhost:3000/api/users/" + user.id
      })
      )
      result.push({
        'Cantidad total de usuarios': count.length,
        Usuarios: data
      })

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
      let result = await user.findByPk(req.params.id, {
        include: {
          all: true,
        },
      })
      let data = {}
      data.id = result.id;
      data.firstName = result.firstName;
      data.userName = result.userName;
      data.avatar = "http://localhost:3000/assets/avatars/" + result.avatar
      if (data) {
        return res.status(200).json(data);
      } else {
        return res.status(404).json("Este usuario no existe.");
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}




module.exports = userApi
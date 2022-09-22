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
       

        result.push({
          'Cantidad total de usuarios': count.length,
          Usuarios: count.map(function(element){
    return `Id: ${element.id}   Nombre: ${element.firstName}     Email: ${element.email}`
}),
detalle: count.map(function(element){
  return `${element.email}     Para mas detalle   =>   http://localhost:3000/api/users/${element.id}`
        }),})

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
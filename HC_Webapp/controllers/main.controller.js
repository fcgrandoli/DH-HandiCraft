const mainController = {
  mostrarConstruccion: (req, res) => {
    return res.render('enConstruccion');
  },
  mostrarMantenimiento: (req, res) => {
    return res.render('enMantenimiento');
  },
};

module.exports = mainController;

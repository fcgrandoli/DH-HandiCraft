const fs= require ('fs');

function jsonMiddlewares (req, res, next){
  
    fs.appendFileSync ('log.txt', 'El producto ' + productList [i] + 'Se agrego al carrito con exito' )

    next();

}
module.exports= jsonMiddlewares;
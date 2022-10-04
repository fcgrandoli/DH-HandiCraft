import "../../public/ProductsLast.css";
import { useState, useEffect } from "react";
import { getProducts } from "../services/products";

export function ProductsLast() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return (
    
    <div className="box-productLast" key={"box.productLast"}>
      <div className="box-title-productLast">
        <p className="title-productLast">Último producto creado</p>
      </div>

      {products.map((product, index) => {
        if (index === products.length - 1) {
          return (
            <div className="productLast" key={"productLast"}>
              <p className="productLast-name">{product.Nombre}</p>
              <p className="productLast-desc">{product.DescripcionLarga}</p>
              <div className="productLast-image">
                <img className="productLast-preview" src={product.Imagen}></img>
              </div>
              <a className="productLast-link" href={product.DetalleProducto}>
                Detalle del producto
              </a>
            </div>
          );
        }
      })}
    </div>
  );
}

import "../../public/ProductsLast.css";
import { useState, useEffect } from "react";
import { getProducts } from "../services/products";

export function ProductsLast() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return (
    <div className="productLast" key={"productLast"}>
      <div className="title-productLast">
        <p>Último producto creado:</p>
      </div>
      {products.map((product, index) => {
        if (index === products.length - 1) {
          return (
            <>
              <p>{product.Nombre}</p>
              <p>{product.DescripcionLarga}</p>
              <img src={product.Imagen}></img>
              <a href={product.DetalleProducto}></a>
            </>
          );
        }
      })}
    </div>
  );
}

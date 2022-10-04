import "../../public/ProductsList.css";
import { useState, useEffect } from "react";
import { getProducts } from "../services/products";

export function ProductsList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return (
    <div className="box-productList" key={"productList"}>
      <div className="box-title-productList">
        <p className="title-productList">Lista de Productos</p>
      </div>
      <div className="grid-producList">
        {products.map((product, index) => {
          return (
            <div className="productItem" key={`prodItem$-${index}`}>
              <a className="productItem-name" href={product.DetalleProducto}>{product.Nombre}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

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
      <div className="title-productList">
        <p>List de Productos:</p>
      </div>
      {products.map((product, index) => {
        return (
          <div className="productItem" key={`prodItem$-${index}`}>
            <h4>{product.Nombre}</h4>
          </div>
        );
      })}
    </div>
  );
}

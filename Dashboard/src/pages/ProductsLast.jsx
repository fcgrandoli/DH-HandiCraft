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
      {products.map((product, index) => {
        console.log(products.length);
        if (index === products.length - 1) {
          return <h4>{product.Nombre}</h4>;
        }
      })}
    </div>
  );
}

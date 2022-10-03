import "../../public/Products.css";
import { useState, useEffect } from "react";
import { getProducts } from "../services/products";

export function ProductsTotal() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return (
    <div>
      {products.map((product, index) => {
        if (index === 0) {
          return (
            <div className="total" key={"total-" + index}>
              <p>Total de Productos: {product.totalProductos}</p>
              <hr />
            </div>
          );
        }
      })}
    </div>
  );
}

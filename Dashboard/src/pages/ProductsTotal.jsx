import "../../public/ProductsTotal.css";
import { useState, useEffect } from "react";
import { getProducts } from "../services/products";

export function ProductsTotal() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return (
    <div className="totalProducts" key={"totalProducts"}>
      <h4>Total de Productos: {products.length}</h4>
    </div>
  );
}

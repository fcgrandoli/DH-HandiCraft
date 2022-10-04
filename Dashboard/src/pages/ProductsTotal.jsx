import "../../public/ProductsTotal.css";
import { useState, useEffect } from "react";
import { getProducts } from "../services/products";

export function ProductsTotal() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return (
    <div className="box-totalProducts" key={"totalProducts"}>
      <div className="box-title-totalProducts">
        <p className="title-totalProducts">Total de Productos</p>
      </div>
      <p className="totalProducts">{products.length}</p>
    </div>
  );
}

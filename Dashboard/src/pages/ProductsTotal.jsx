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
        <a className="title-totalProducts" href="http://localhost:3000/">
          Total de Productos &#187;
        </a>
      </div>
      <p className="totalProducts">{products.length}</p>
      <div>
        <a className="productsList-link" href="/productsList">
          Detalle
        </a>
      </div>
    </div>
  );
}

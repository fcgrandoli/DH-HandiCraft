import "../../public/ProductsCategory.css";
import { useState, useEffect } from "react";
import { getProducts } from "../services/products";

export function ProductsCategory() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  let collections = [...new Set(products.map((data) => data.Categoria))];
  return (
    <ul className="box-category">
      <div className="title-category">
      <p>Categorias:</p>
      </div>
      {collections.map((collection, index) => {
        return (
          <li className="category" key={`category-${index}`}>
            {collection}
          </li>
        );
      })}
    </ul>
  );
}

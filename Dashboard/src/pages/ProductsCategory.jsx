import "../../public/ProductsCategory.css";
import { useState, useEffect } from "react";
import { getProductsByCategory } from "../services/products";

export function ProductsCategory() {
  const [collections, setProducts] = useState([]);
  useEffect(() => {
    getProductsByCategory().then(setProducts);
  }, []);

  const collectionURL = "http://localhost:3000/categorias?collection=";

  return (
    <div className="box-category">
      <div className="box-title-category">
        <div className="box-titles-category">
          <a
            className="title-category"
            href="http://localhost:3000/api/products/summary"
          >
            Categorias ({collections.length}) &#187;
          </a>
          <p className="title-quantity">#</p>
        </div>

        {collections.map((collection, index) => {
          return (
            <div className="collection-sorter" key={`sorter-${index}`}>
              <a
                className="category"
                key={`category-${index}`}
                href={collectionURL + collection.Categoria}
              >
                {collection.Categoria} &#187;
              </a>
              <span className="quantity" key={`quantity-${index}`}>
                {collection.Count}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import "../../public/Products.css";
import { useState, useEffect } from "react";
import { getProducts } from "../services/products";

export function ProductsCategory() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return (
    <div>
      {products.map((product, index) => {
        if (index !== 0) {
          return (
            <div className="box-products">
              <div className="category" key={`cat${index}-${index}`}>
                <p>Categoria: {product.Categoria}</p>
                <hr />
              </div>
              <div>
                {product.Productos.map((product, index) => {
                  if (index !== 0) {
                    return (
                      <div className="product" key={`prod${index}-${index}`}>
                        <p>Producto: {product.Nombre}</p>
                      </div>
                    );
                  }
                })}
              </div>
              <hr />
            </div>
          );
        }
      })}
    </div>
  );
}

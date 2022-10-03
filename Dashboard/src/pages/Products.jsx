import "../../public/Products.css";
import { useState, useEffect } from "react";
import { getProducts } from "../services/products";

export function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return (
    <div>
      {products.map((product, index) => {
        if (index === 0) {
          return (
            <div class="total" key={index}>
              <p>Total de Productos: {product.productCount}</p>
              <hr />
            </div>
          );
        } else {
          return (
            <div>
              <div class="category" key={"cat" + index}>
                <p>Categoria: {product.Categoria}</p>
                <hr />
              </div>
              <div>
                {product.Productos.map((product, index) => {
                  if (index !== 0) {
                    return (
                      <div class="product" key={"prod" + index}>
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

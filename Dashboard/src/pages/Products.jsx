import "../../public/Products.css";
import { useState, useEffect } from "react";
import { getProducts } from "../services/products";

export function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/api/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.log(err.message);
      });
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
              <div class="category"  key={"cat" + index}>
                <p>Categoria: {product.Categoria}</p>
                <hr />
              </div>
              <div>
                {product.Productos.map((product, index) => {
                  if (index !== 0) {
                    return (
                      <div class="product"  key={"prod" + index}>
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

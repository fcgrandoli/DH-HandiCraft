import "../../public/ProductsList.css";
import { useState, useEffect } from "react";
import { getProducts } from "../services/products";

export function ProductsList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return (
    <div className="box-productList" key={"productList"}>
      <div className="box-title-productList">
        <a
          className="title-productList"
          href="http://localhost:3000/api/products/"
        >
          Lista de Productos &#187;
        </a>
      </div>
      <div className="grid-producList">
        {products.map((product, index) => {
          let urlDelete = `http://localhost:3000/viewProduct/${product.ID}/delete/dash`;
          let urlEdit = `http://localhost:3000/viewProduct/${product.ID}/editar`;
          return (
            <div className="productItem" key={`prodItem$-${index}`}>
              <a className="productItem-name" href={product.DetalleProducto}>
                {product.Nombre}
              </a>
              <ul className="buttons-admin">
                <li className="btn-edit-container">
                  <a className="btn-edit" href={urlEdit}>
                    <i class="fa fa-solid fa-pen"></i>
                  </a>
                </li>
                <li className="btn-delete-container">
                  <form className="fields" method="POST" action={urlDelete}>
                    <button className="btn-delete" type="submit">
                      <i className="fa fa-solid fa-trash"></i>
                    </button>
                  </form>
                </li>
              </ul>
            </div>
            
          );
        })}
        
      </div>
      <div>
        <a class="btn-create" href="http://localhost:3000/viewProduct/createProduct">
          +
        </a>
      </div>
    </div>
  );
}

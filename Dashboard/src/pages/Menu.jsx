import { Routes, Route, Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="links">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/productsCategory">Categorias</Link>
      </div>
      <div>
        <Link to="/productsLast">Ultimo Producto</Link>
      </div>
      <div>
        <Link to="/productsList">Lista de Productos</Link>
      </div>
      <div>
        <Link to="/products">Overview Productos</Link>
      </div>
      <div>
        <Link to="/productsTotal">Total de Productos</Link>
      </div>
      <div>
        <Link to="/users">Users</Link>
      </div>
      <div>
        <Link to="/usersDetail">Users Detail</Link>
      </div>
      <div>
        <Link to="/usersLast">Users Last</Link>
      </div>
    </nav>
  );
}

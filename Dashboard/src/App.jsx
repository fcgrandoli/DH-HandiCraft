/* import { useState } from 'react'
import reactLogo from './assets/react.svg'*/
import "./App.css";
import "../public/Home.css";
import { Routes, Route, Link } from "react-router-dom";
//import { ProductsCategory } from "./pages/ProductsCategory.jsx";
import { ProductsLast } from "./pages/ProductsLast.jsx";
import { ProductsList } from "./pages/ProductsList.jsx";
import { ProductsTotal } from "./pages/ProductsTotal.jsx";
import { UsersTotal } from "./pages/UsersTotal.jsx";
import { Users } from "./pages/Users.jsx";
import { UsersLast } from "./pages/UsersLast.jsx";
import { ProductsSummary } from "./pages/ProductsSummary.jsx";
import Error from "./pages/Error.jsx";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <section>
        <nav className="links">
          <div>
            <Link to="/">Home</Link>
          </div>
          {/*           <div>
            <Link to="/productsCategory">Categorias</Link>
          </div>*/}
          <div>
            <Link to="/productsLast">Ultimo Producto</Link>
          </div>
          <div>
            <Link to="/productsList">Lista de Productos</Link>
          </div>
          <div>
            <Link to="/productsSummary">ASDADS</Link>
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

      </section>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/*      <Route path="/productsCategory" element={<ProductsCategory />}></Route>*/}
        <Route path="/productsSummary" element={<ProductsSummary />}></Route>
        <Route path="/productsLast" element={<ProductsLast />}></Route>
        <Route path="/productsList" element={<ProductsList />}></Route>
        <Route path="/productsTotal" element={<ProductsTotal />}></Route>
        <Route path="/users" element={<UsersTotal />}></Route>
        <Route path="/usersDetail" element={<Users />}></Route>
        <Route path="/usersLast" element={<UsersLast />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;

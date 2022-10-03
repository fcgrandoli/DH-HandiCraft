/* import { useState } from 'react'
import reactLogo from './assets/react.svg'*/
import "./App.css";
import "../public/Home.css";
import { Routes, Route, Link } from "react-router-dom";
import { ProductsTotal } from "./pages/ProductsTotal.jsx";
//import { ProductsCategory } from "./pages/ProductsCategory.jsx";
import { UsersTotal } from "./pages/UsersTotal.jsx";
import { Users } from "./pages/Users.jsx";
import { UsersLast } from "./pages/UsersLast.jsx";
import Error from "./pages/Error.jsx";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <nav className="links">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/products">Products</Link>
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

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductsTotal />}></Route>
        <Route path="/users" element={<UsersTotal />}></Route>
        <Route path="/usersDetail" element={<Users />}></Route>
        <Route path="/usersLast" element={<UsersLast />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;

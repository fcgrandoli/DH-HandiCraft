/* import { useState } from 'react'
import reactLogo from './assets/react.svg'*/
import "./App.css";
import "../public/Home.css";
import { Routes, Route, Link } from "react-router-dom";
import { ProductsTotal } from "./pages/ProductsTotal.jsx";
//import { ProductsCategory } from "./pages/ProductsCategory.jsx";
import { UsersTotal } from "./pages/UsersTotal.jsx";
import { Users } from "./pages/Users.jsx";
import Error from "./pages/Error.jsx";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <nav className="links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/users">Users</Link>
        <Link to="/usersDetail">Users Detail</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductsTotal />}></Route>
        <Route path="/users" element={<UsersTotal />}></Route>
        <Route path="/usersDetail" element={<Users />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;

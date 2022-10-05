/* import { useState } from 'react'
import reactLogo from './assets/react.svg'*/
import "./App.css";
import "../public/Home.css";
import { Routes, Route, Link } from "react-router-dom";
import { ProductsCategory } from "./pages/ProductsCategory";
import { ProductsLast } from "./pages/ProductsLast";
import { ProductsListView } from "./pages/ProductsListView";
import { ProductsTotal } from "./pages/ProductsTotal";
import { UsersTotal } from "./pages/UsersTotal";
import { Users } from "./pages/Users";
import { UsersLast } from "./pages/UsersLast";
import { ProductsSummary } from "./pages/ProductsSummary";
import { UserSummary } from "./pages/UserSummary";
import Error from "./pages/Error";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductsSummary />}></Route>
        <Route path="/productsCategory" element={<ProductsCategory />}></Route>
        <Route path="/productsLast" element={<ProductsLast />}></Route>
        <Route path="/productsList" element={<ProductsListView />}></Route>
        <Route path="/productsTotal" element={<ProductsTotal />}></Route>
        <Route path="/users" element={<UserSummary/>}></Route>
        <Route path="/usersTotal" element={<UsersTotal />}></Route>
        <Route path="/usersDetail" element={<Users />}></Route>
        <Route path="/usersLast" element={<UsersLast />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;

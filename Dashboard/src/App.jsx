/* import { useState } from 'react'
import reactLogo from './assets/react.svg'*/
import './App.css' 
import '../public/Home.css' 
import { Routes, Route, Link } from "react-router-dom"
import Products from './pages/Products.jsx'
import Users from './pages/Users.jsx'
import Error from './pages/Error.jsx'
import { Outlet } from "react-router-dom"
import Home from './pages/Home'

function App() {

  return (
    <>

    <nav class="links">
    <Link to="/">Home</Link>
    <Link to="/products">Products</Link>
    <Link to="/users">Users</Link>

    </nav>

    <Routes>
    <Route  path="/" element= { <Home/> }  > </Route>
    <Route  path="/products" element= {<> <Products/></>}  >  </Route> 
    <Route  path="/users" element= {<> <Users/> </>}  > </Route> 
    <Route  path="*" element= { <Error/>}  >  </Route> 


    </Routes>
   
    </>
    
  )
}

export default App
  
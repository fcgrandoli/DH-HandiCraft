/* import { useState } from 'react'
import reactLogo from './assets/react.svg'*/
import './App.css' 
import { Routes, Route, Link } from "react-router-dom"
import Products from './pages/Products.jsx'
import Users from './pages/Users.jsx'

function App() {

  return (
    <>
        
    <nav>
    <Link to="/products">Products</Link>
    <Link to="/users">Users</Link>

    </nav>


    <Routes>
    <Route  path="*" element= { <Products/>}  >  </Route> 
    <Route  path="/users" element= { <Users/>}  >  </Route> 
    </Routes>
   
    </>
  )
}

export default App
  
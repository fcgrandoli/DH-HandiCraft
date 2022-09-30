/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css' */
import { Routes, Route, Link } from "react-router-dom"
import Products from './services/products'

function App() {

  return (
      <div className="App">
        <h1>Hola mundo!!!!</h1>
     <Link to="/">Productos </Link>
      <Routes>
        <Route path="/" element={<Products/>} ></Route>
      </Routes>
    </div>
   
  )
}

export default App
  
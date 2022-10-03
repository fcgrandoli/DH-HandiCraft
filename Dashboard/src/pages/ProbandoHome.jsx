/* import { useState, useEffect } from "react"
import { getAll } from "../services/products"
import { Link } from "react-router-dom"

export default function Home() {

    const  [list, setList] = useState ([])
    const [page, setPage] = useState ([1])
    useEffect(() => {
        getAll(page).then((data)=>setList(data))
    }, 
    [page])
    
    return (
        <>
          <h1> Lista de productos </h1>
          <span>  {page}  </span>
          <ul>
            {list.map((item) => (
              <li key={item.id}>
                <Link to={`/products/${item.id}`}>{item.nombre} </Link>
              </li>
            ))}
          </ul>
        </>
      );} */
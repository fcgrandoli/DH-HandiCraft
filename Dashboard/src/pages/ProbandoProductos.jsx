/* import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getOne } from "../services/products"
export default function Products() {
    const { id } = useParams()
    const [product, setProducts] = useState({}) 
    useEffect(() => {
        getOne(id).then(setProducts)
    }, [id])
    return (
    <>
    <h1>Productos </h1> 

     </>
     )
} */
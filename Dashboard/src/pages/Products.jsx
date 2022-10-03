import { useState, useEffect} from "react"
import { Outlet } from "react-router-dom"

const Products = () => {
let [count, setProducts] = useState([])
useEffect(()=>{
    const productApi = async () => {
        let request = await fetch('http://localhost:3000/api/products')
        let response = await request.json()
        setProducts(response)
        console.log(response)
        
}
productApi()
}, [])
return (
<>
    <h1>Total productos:</h1>
    <p>   
    </p>
</>
)
}
export default Products


/* import { useState, useEffect} from "react"
import { Outlet } from "react-router-dom"

const Products = () => {
let [count, setProducts] = useState(null)
    const productApi = async () => {
        let request = await fetch('http://localhost:3000/api/products')
        let response = await request.json();
       return responese;
}
useEffect(productApi,[])
return (
<>
    <h1>Total productos:</h1>
    <Outlet />
    <p>   
    </p>
</>
)
}
export default Products */

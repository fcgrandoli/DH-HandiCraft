import { useState, useEffect} from "react"
import { Outlet, useParams } from "react-router-dom"


const Users = () => {
let [count, setUser] = useState([])
useEffect(()=>{
    const userApi = async () => {
        let request = await fetch('http://localhost:3000/api/users')
        let response = await request.json()
        setUser(response)
        console.log(response)
        
}
userApi()
}, [])
return (
<>
    <h1>Total usuarios:</h1>
    <p>   
    </p>
</>
)
}






export default Users


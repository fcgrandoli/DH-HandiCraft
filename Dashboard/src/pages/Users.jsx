import { promiseImpl } from "ejs";
import { useState, useEffect} from "react"
import { Outlet, useParams } from "react-router-dom"


const Users = () => {
<<<<<<< HEAD
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
=======

//     const url = "http://localhost:3000/api/users" ;
//      let [users, setUsers] = useState([])

//      const fetchApi = async () => 
//       {
//         let request = await fetch(url);

//         let response = await request.json()

//         setUsers(response)
             
//         console.log(response)
// }
// useEffect(() => {
//     fetchApi();
// }, []);



return (

    <>
    <h1>
    Total usuarios:
    </h1>
    <p>
    {
    
    }
    </p>
    </>
>>>>>>> 85d7271 (sidebar dashboard)
)
}










// const Users = () => {
// let [count, setUser] = useState([])
// useEffect(()=>{
//     const userApi = async () => {
//         let request = await fetch('http://localhost:3000/api/users', {
//             mode: 'no-cors'
//         }
//         )
//         let response = await request.json()
//         setUser(response)
//         console.log(response)
        
// }
// userApi()
// }, [])

export default Users


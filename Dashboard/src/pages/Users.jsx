import { useState, useEffect} from "react"
import { Outlet, useParams } from "react-router-dom"
import { getUsers } from "../services/users";


export default function Users () {
const [users, setUsers] = useState([]);
useEffect(() => {
    console.log(users.length)
  getUsers().then(setUsers);
}, []);
return (
<>
    <h1>Total usuarios:</h1>
    

</>
)
}








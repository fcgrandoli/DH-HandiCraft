import "../../public/Users.css";
import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { getUsers } from "../services/users";

export function UsersTotal() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then(setUsers);
  }, []);
  return (
    <div                             className="usersTotal"          >
      {users.map((user, index) => {
        if (index === 0) {
          return (
            <div className="user" key={`usersTotal-${index}`}>
              <h3 className="title-totalus"    > Total de Usuarios         </h3>
              <p className="totalus"          >  {user.totalUsuarios} </p>
            </div>
          );
          
        }
      })}
      <a className="usersDetail-link" href="/usersDetail">
                Detalle
              </a>
    </div>
  );
}

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
    <div className="usersTotal">
      {users.map((user, index) => {
        if (index === 0) {
          return (
            <div className="user" key={`usersTotal-${index}`}>
              <p>Total de Usuarios: {user.totalUsuarios}</p>
              <hr />
            </div>
          );
        }
      })}
    </div>
  );
}

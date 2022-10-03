import "../../public/Users.css";
import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { getUsers } from "../services/users";

export function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then(setUsers);
  }, []);
  return (
    <div className="users">
      <h3>Detalle de Usuarios:</h3>
      {users.map((user, index) => {
        if (index !== 0) {
          return (
            <div>
              {user.Usuarios.map((user, index) => {
                return (
                  <div className="user" key={`usr-${index}`}>
                    <p>Usuario: {user.Nombre}</p>
                  </div>
                );
              })}
            </div>
          );
        }
      })}
    </div>
  );
}

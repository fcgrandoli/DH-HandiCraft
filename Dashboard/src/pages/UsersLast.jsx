import "../../public/UsersLast.css";
import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { getUsers } from "../services/users";

export function UsersLast() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then(setUsers);
  }, []);
  return (
    <div className="usersLast">
      {users.map((user, index) => {
        if (index !== 0) {
          return (
            <div>
                <h3>Ultimo Usuario:</h3>
              {user.Usuarios.map((user, index, Usuarios) => {
                 if (index === Usuarios.length -1) {
                  return (
                    <div className="userLast" key={`usrLast-${index}`}>
                      <p> Nombre Completo: {user.Nombre}</p>
                      <p> Email: {user.Email}</p>
                    </div>
                  );
                }
              })}
            </div>
          );
        }
      })}
    </div>
  );
}

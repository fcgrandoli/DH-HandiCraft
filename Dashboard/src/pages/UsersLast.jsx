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
    <div className="box-usersLast">
      {users.map((user, index) => {
        if (index !== 0) {
          return (
            <div>
                <h3 className="title-lastUser">Ultimo Usuario</h3>
              {user.Usuarios.map((user, index, Usuarios) => {
                 if (index === Usuarios.length -1) {
                  return (
                    <div className="userLast" key={`usrLast-${index}`}>
    
                    <p className="userLast-id"> ID</p>
                   
                      <p className="userLast-name"> Nombre </p>
                     
                      <p className="userLast-email"> Email </p>
                      <div className="datos-userLast">
                      <i class="fa fa-user fa-lg" aria-hidden="true"></i>
                      <a className="id-userLast"> {user.ID} </a>
                      <a className="name-userLast" >{user.Nombre} </a>
                      <a className="email-userLast" >{user.Email} </a>
                      </div>
                      
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

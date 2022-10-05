import "../../public/Users.css";
import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { getUsers } from "../services/users";
import { Sidebar } from "./Sidebar";

export function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then(setUsers);
  }, []);
  return (
<>
<div className="box-users">
    <div className="users">
      <h3 className="title-detail">Nombres de Usuarios</h3>
      {users.map((user, index) => {
        if (index !== 0) {
          return (

            <div>
              {user.Usuarios.map((user, index) => {
                return (
                  <div key={`usr-${index}`}>
                    <a className="userNames" href={user.Detalle}>
                      {user.NombreDeUsuario}
                    </a>
                  </div>

                );
              })}
            </div>


          );
        }
      })} <div class="box-like">
      <div class="btn">
          <h1>Like si te gusto el Dashboard!</h1>
          <i  class="fa fa-thumbs-up" aria-hidden="true"></i>
      </div>
  </div>
  </div>
    </div>
    /* <div className="sidebarUsers">
          <Sidebar />
        </div> */
</>
  );
}





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
<<<<<<< Updated upstream
                  
              <div>

              </div>
                
=======
>>>>>>> Stashed changes
                  </div>
                  
                );
              })}
              {/* <div className="youtube">
          <h1 class='title'>Un poco de lo que hacemos</h1>
<iframe class="video" width="560" height="300" src="https://www.youtube.com/embed/YArpAOlWS4A?controls=0&amp;start=10&amp;autoplay=1&amp;mute=1&amp;loop=1&playlist=YArpAOlWS4A&amp;disablekb=1&amp;modestbranding=1&amp;rel
=1&amp;showinfo=0&amp;" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           <a className="creditos" href="https://www.youtube.com/watch?v=YArpAOlWS4A&list=TLGG8-Afg8RION0wNDEwMjAyMg">
                  Creditos
              </a> 
    
          </div> */}

            </div>
            
          );
          
        }
      })}
    </div>
    
  );
}





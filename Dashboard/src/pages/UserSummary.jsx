import "../../public/UsersSummary.css";
import { Users } from "./Users";
import { UsersLast } from "./UsersLast";
import { UsersTotal } from "./UsersTotal";
import { Sidebar } from "./Sidebar";

export function UserSummary() {
  return (
    <>

      <div className="prd-dash">
      <div class="boxSideBar">
        <div className="sidebar">
          <Sidebar />
        </div>
        </div>
        
        <div class="dash-container">
          <div class="box2">
          <UsersLast  />
          </div>
            <div class="box3">
            
            <UsersTotal />
          </div>
          </div>
          </div>
      
    </>
  );
}
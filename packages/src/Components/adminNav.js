import React from "react";
import Admpackage from "../Pages/adminSub";
import './Style.css';


const AdminNav = () => {
    return(
<div>
<div  className="adminNav">
         <ul>
             <li>Account Approval</li>
             <li>Enquiry</li>
             <li>Packages</li>
             <li>Reports</li>
             <li>Agent Management</li>
             <li>Help</li>
        </ul>
    </div>
    <div className="adminWork">
        <Admpackage/>
    </div>


</div>
     
   
    )
}

export default AdminNav;
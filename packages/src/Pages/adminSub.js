import React from "react";
import '../Components/Style.css';

const Admpackage  = () => {
    return(
        <div>
           <h1 style={{fontSize:"30px",fontFamily:"Trebuchet MS",marginBottom: "0%",marginTop: "0%",textAlign:"left"}}>Package <span style={{color:"#0080ff"}} >Subscription</span></h1>  
          <p>Package details |  Edit Package</p> 
          
          <label for="packs">Select a package:</label>
          <select name="packages" id="packages">
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
          <option value="platinum">Platinum</option>
          </select>     
          <h2>Package details</h2> 
          <ul>
            <li>Package Name</li>
            <li>Package Price</li>
            <li>Package Features</li>
            <li>Package Description</li>
            <li>Package Logo</li>
            <li>No of Subscriptions</li>
           
          </ul>
          <h2>Edit package</h2> 
          <ul>
           
            <li><label>Package Price <input type={'texbox'} className="priceupdate"></input></label></li>
            <li><label>Package Description<textarea id="packdes" name="packdes"></textarea></label></li>
            <li><label>Package Logo<input type={'file'} id="img" name="img" accept="image/*"></input></label></li>
            <li><label>Package Advertisements<input type={'file'} id="img" name="img" accept="image/*" multiple></input></label></li>
          </ul>
        </div>
    )
}

export default Admpackage;
import React from "react";
import './Style.css';
import platinum from '../PlatinumIcon.png';
import { TiTick } from "react-icons/ti";
import SubButton from "./Subscribebutton";
import { Link } from "react-router-dom";

const PlatinumPack = () => {
    return(
        <div className="packagebox">
        <p className="packageName"  style={{color:'#6a6b6b'}}>Platinum</p>
        <img src={platinum} alt="" width={'75%'} height={'35%'} style={{paddingLeft:'14%',marginBottom:'0px',marginLeft:'6%'}}/>
      
    <p className="packageName"><div style={{textAlign:"center",color:'black'}}>
    <span style={{fontSize:"30px ",lineHeight: "0.6",padding:'0%',fontFamily:'Tahoma',marginBottom:'0'}} >Rs.500</span><span style={{color:'#6a6b6b'}}>/</span>per year</div> </p>
         
         <ul className="packageFeatureList">
             <li>< TiTick size={20} color={'green'} />15+ templates designs</li>
             <li>< TiTick size={20} color={'green'}/>Unlimited accounts access</li>
             <li>< TiTick size={20} color={'green'}/>Calandar facilities</li>
             <li>< TiTick size={20} color={'green'}/>Google map facilities</li>
         </ul>
         <Link to = '/payment'><SubButton/></Link>
        </div>

    )
}
 export default PlatinumPack;

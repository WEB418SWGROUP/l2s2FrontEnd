import React from "react";
import './Style.css';
import gold from '../GoldIcon.png';
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import SubButton from "./Subscribebutton";
import { Link } from "react-router-dom";

const GoldPack = () => {
    return(
        <div className="packagebox">
             <p className="packageName"  style={{color:'#e6ac00'}}>Gold</p>
         <img src={gold} alt="" width={'75%'} height={'35%'} style={{paddingLeft:'14%',marginBottom:'0px',marginLeft:'6%'}}/>
      
    <p className="packageName"><div style={{textAlign:"center",color:'black'}}><span style={{fontSize:"30px ",lineHeight: "0.6",padding:'0%',fontFamily:'Tahoma',marginBottom:'0'}} >Rs.400</span><span style={{color:'#e6ac00'}}>/</span>per year</div> </p>
         <ul className="packageFeatureList">
             <li>< TiTick size={20} color={'green'} />10+ templates designs</li>
             <li>< TiTick size={20} color={'green'}/>100+ accounts per month</li>
             <li>< TiTick size={20} color={'green'}/>Calandar facilities</li>
             <li style={{color:'#3d3d29'}}>< ImCross color="red"/>Google map facilities</li>
         </ul>
         <Link to = '/payment'><SubButton/></Link>
        </div>

    )
}
 export default GoldPack;





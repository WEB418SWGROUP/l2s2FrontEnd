import React from "react";
import GoldPack from "../Components/GoldPackage";
import PlatinumPack from "../Components/PlatinumPackage";
import SilverPack from "../Components/SilverPackage";
import '../Components/Style.css';
import { Link  } from "react-router-dom";


const PackageDetail = () => {
    return(
       <div className="boxy"  > 
      <h1 style={{fontSize:"30px",fontFamily:"Trebuchet MS",marginBottom: "0%",marginTop: "0%",textAlign:"center"}}>Choose your <span style={{color:"#0080ff"}} >Package</span></h1>  

       <div className="row" style={{padding: "1% 15% 3% "}}>
       <div className="column"><GoldPack /><Link to ='/package-desc-gold'><p className="seemore"><b>see more&gt;&gt;&gt; </b></p></Link></div>
       <div className="column"><PlatinumPack /><Link to ='/package-desc-platinum'><p className="seemore"><b>see more&gt;&gt;&gt; </b></p></Link></div>
       <div className="column"><SilverPack /><Link to ='/package-desc-silver'><p className="seemore"><b>see more&gt;&gt;&gt; </b></p></Link></div> 
       </div>
       
       </div>

  
        
    )
}

export default PackageDetail;
import React from "react";
import '../Components/Style.css';
import silver from '../SilverIcon.png';
import TrialButton from "../Components/trialbutton";
import { GrTemplate } from "react-icons/gr" ;
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { GrBusinessService } from "react-icons/gr";
import PostComment from "../Components/Comments";

const SilverDesc = () => {
    return(
        <div className="boxy">
         <p className="packageName"  style={{color:'#b7babc',textAlign:'left',padding:'1% 18% 2%'}}>Silver <b><span style={{fontSize:"30px",fontFamily:"Trebuchet MS",marginBottom: "2%",marginTop: "0%",textAlign:"center",color:'black'}}>: About  <span style={{color:"#0080ff"}} >Package</span></span></b>   </p>
         <div style={{padding: "1% 18% 0% "}}>
         <div className="row" style={{boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19)',backgroundColor:'white'}}>
         <div className="equaldivider" >
         <img src={silver} alt="" width={'100%'} height={'100%'} style={{marginTop:'5%'}}/>
         </div> 
         <div className="equaldivider" >
         <p style={{textAlign:'justify',paddingRight:'10%',paddingTop:'10%'}}>This is silver package . This package is nice. It has good features. It has great features such access
         50+ account per month, 5+ templates ,google.It is suitable for small scale businesses. Subscribe and enjoy!
          </p>
          <h3 style={{color:'#4d4d33'}}>Starts from <span style={{fontSize:'40px',color:'#b7babc'}}>Rs.300</span> per year</h3>
         <TrialButton/>
         <h2 style={{color:'#000066'}}>Try the package for free. Get one week free trial !</h2>
         </div>
         </div>
         
      
        </div>
        <div className="row" style={{padding:"0 2%",textAlign:"center",borderTop:"4px solid #ccccb3",margin:"0 10%"}}>
         <div className="quarterdivider"><MdOutlineSupervisorAccount size={50}/><h3>50+ Accounts</h3><p>You can access 100+ service consumers posts fit to your criterias per month.</p></div>
         <div className="quarterdivider"><GrTemplate size={50}/><h3>5+ Templates designs</h3><p>You can customize your profile with 10+ different templates.</p></div>
         <div className="quarterdivider"><GrBusinessService size={50}/><h3>Small scale business</h3><p>This package is more suitable for medium scale businesses.</p></div>
         <div className="quarterdivider"><GiReceiveMoney size={50}/><h3>Save money</h3><p>This package is very low price. You can enjoy limited benfits with lower price</p></div>
         </div>
         <PostComment/>
        </div>
    )
}

export default SilverDesc;
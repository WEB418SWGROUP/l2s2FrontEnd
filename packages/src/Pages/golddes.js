import React from "react";
import '../Components/Style.css';
import gold from '../GoldIcon.png';
import TrialButton from "../Components/trialbutton";
import { GrTemplate } from "react-icons/gr" ;
import { SiGooglecalendar } from "react-icons/si";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { GrBusinessService } from "react-icons/gr";
import PostComment from "../Components/Comments";

const GoldDesc = () => {
    return(
        <div className="boxy">
         <p className="packageName"  style={{color:'#e6ac00',textAlign:'left',padding:'1% 18% 2%'}}>Gold <b><span style={{fontSize:"30px",fontFamily:"Trebuchet MS",marginBottom: "2%",marginTop: "0%",textAlign:"center",color:'black'}}>: About  <span style={{color:"#0080ff"}} >Package</span></span></b>   </p>
         <div style={{padding: "1% 18% 0% "}}>
         <div className="row" style={{boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19)',backgroundColor:'white'}}>
         <div className="equaldivider" >
         <img src={gold} alt="" width={'100%'} height={'100%'} style={{marginTop:'5%'}}/>
         </div> 
         <div className="equaldivider" >
         <p style={{textAlign:'justify',paddingRight:'10%',paddingTop:'10%'}}>This is gold package . This package is nice. It has good features. It has great features such access
         100+ account per month, 10+ templates ,google.It is suitable for medium scale businesses. Subscribe and enjoy!
          </p>
          <h3 style={{color:'#4d4d33'}}>Starts from <span style={{fontSize:'40px',color:'#e6ac00'}}>Rs.400</span> per year</h3>
         <TrialButton/>
         <h2 style={{color:'#000066'}}>Try the package for free. Get one week free trial !</h2>
         </div>
         </div>
         
      
        </div>
        <div className="row" style={{padding:"0 2%",textAlign:"center",borderTop:"4px solid #ccccb3",margin:"0 10%"}}>
         <div className="quarterdivider"><MdOutlineSupervisorAccount size={50}/><h3>100+ Accounts</h3><p>You can access 100+ service consumers posts fit to your criterias per month.</p></div>
         <div className="quarterdivider"><GrTemplate size={50}/><h3>10+ Templates designs</h3><p>You can customize your profile with 10+ different templates.</p></div>
         <div className="quarterdivider"><SiGooglecalendar size={50}/><h3>Google Calendar</h3><p>Google Claendar is incorporated with the app. So you can save your dates there.</p></div>
         <div className="quarterdivider"><GrBusinessService size={50}/><h3>Medium scale business</h3><p>This package is more suitable for medium scale businesses.</p></div>
         </div>
         <PostComment/>
        </div>
    )
}

export default GoldDesc;
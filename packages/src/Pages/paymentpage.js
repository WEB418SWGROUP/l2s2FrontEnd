import React from "react";
import GoldPack from "../Components/GoldPackage";
import '../Components/Style.css';
import { FaCcVisa } from "react-icons/fa";

const PaymentPage = () => {
   return (
       <div className="boxy">
          <div style={{padding: "1% 18% 3% " }}>
              
          <div className="row" style={{boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 7px 25px 0 rgba(0, 0, 0, 0.068)'}}>
                <div className="equaldivider" style={{backgroundColor:'#0080ff',padding:'5% 8%'}}><GoldPack/></div>
                <div className="equaldivider" style={{border:'1px solid black',backgroundColor:'white',padding:'5%'}}>
                    
              <p style={{fontSize:"30px",fontFamily:"Trebuchet MS",marginBottom: "2%",marginTop: "0%",textAlign:"center",color:"#0080ff"}}> <b>Payment </b></p>
                    <label><p>Package name</p>
         
                    </label>
                    <label><p>Price</p></label>
                    <label>Card Number<input type={'texbox'} className="paymentfield"></input></label>
                    <label>Name on card<input type={'texbox'} className="paymentfield"></input></label>
                    <label>Expiry date<input type={'month'} className="paymentfield"></input></label>
                    <label>CVC<input type={'texbox'} className="paymentfield"></input></label>            
                   <label><button style={{border:'none', cursor: 'pointer'}}><FaCcVisa size={50}/></button></label>
                  <label><input type={'checkbox'}></input>Save card details</label><br></br>
                    <label>OTP<input type={'texbox'} className="paymentfield"></input></label> 
                    
                    <button className="subButton">Submit</button>
                    </div>
           </div>
              
              </div>  
          
       </div>
   )
}

export default PaymentPage;


// className="packageName"  style={{color:'#6a6b6b',textAlign:'left',padding:'1% 18% 2%'}}
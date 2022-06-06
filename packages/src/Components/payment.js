import React from "react";
import { useState } from "react";


function MyForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
      }
    
      return (
      <div>
          <h1>Payment</h1>
        <form onSubmit={handleSubmit}>
          <label>Card Number:
          <input 
            type="text" 
            name="username" 
            value={inputs.username || ""} 
            onChange={handleChange}
          />
          </label>
          <br></br>
          <label>Name on Card:
            <input 
              type="number" 
              name="age" 
              value={inputs.age || ""} 
              onChange={handleChange}
            />
            </label>
            <br></br>
            <label>Expiry Date:
            <input 
              type="month" 
              name="expdate" 
              value={inputs.age || ""} 
              onChange={handleChange}
            />
            </label>
            
            <label>CVC:
            <input 
              type="number" 
              name="cvc" 
              value={inputs.age || ""} 
              onChange={handleChange}
            />
            </label>
            <input type="submit" />
        </form>
      </div>
        
      )
    }
    
   export default MyForm;


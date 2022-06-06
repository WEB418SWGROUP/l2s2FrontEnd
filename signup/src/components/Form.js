import React, { useState } from 'react'
import SignupForm from './SignupForm';
import SignupFormSuccess from "./SignupFormSuccess";

const Form = () => {
  const [formSubmitted, setFormSubmitted]= useState(false);
  const submitForm = () => {
    setFormSubmitted(true);
  }
  return(
    <div>
     {
       !formSubmitted ? <SignupForm submitForm ={submitForm }/> : <SignupFormSuccess/>
     }
    </div>
   
  )
}
export default Form
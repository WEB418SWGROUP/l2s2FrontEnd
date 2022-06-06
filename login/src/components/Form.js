import React, { useState } from 'react'
import LoginForm from './LoginForm';
import LoginFormSuccess from "./LoginFormSuccess";

const Form = () => {
  const [formSubmitted, setFormSubmitted]= useState(false);
  const submitForm = () => {
    setFormSubmitted(true);
  }
  return(
    <div>
     {
       !formSubmitted ? <LoginForm submitForm ={submitForm }/> : <LoginFormSuccess/>
     }
    </div>
   
  )
}
export default Form
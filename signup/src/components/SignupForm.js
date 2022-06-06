import React, {useEffect, useState} from 'react';
import useForm from "./useForm";
import picture from "./pic.png";


const SignupForm = ({ submitForm }) => {
    const {handleChange, handleFormSubmit, values, errors} = useForm(submitForm);
  return(
    <div className='container'>
      <div className='app-wrapper'>
          <div>
              <h2 className='title'>Sign Up</h2>
          </div>
          <form className='form-wrapper'>
          <div>
                  <img src={picture}/>
              </div>
              <br/>
              <h4 className='or'>OR</h4>
              
              <div className='name'>
                  <label className='label'>User Name</label>
                  <input 
                  className='input' 
                  type="text" 
                  name='username' 
                  value={values.username}
                  onChange={handleChange}
                  />
                  {errors.username && <p className='error'>{errors.username}</p> }
              </div>
              <div className='email'>
                  <label className='label'>Email</label>
                  <input 
                  className='input' 
                  type="text" 
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  />
                 {errors.email && <p className='error'>{errors.email}</p> }
              </div>
              <div className='password'>
                  <label className='label'>Password</label>
                  <input className='input' type="password" name='password' value={values.password}
                  onChange={handleChange}
                  />
                 {errors.password && <p className='error'>{errors.password}</p> }
              </div>
              <div>
                  <input type="checkbox"/> <span>By signup you agree to our<span className='x'> Terms and Privacy</span>.</span>
              </div>
              
              <div>
                  <button className='submit' onClick={handleFormSubmit}>Sign Up</button>
              </div>
             
              <p>Already have account?<span className='x'>login</span></p>
          </form>
      </div>

    </div>
  )
};
export default SignupForm;
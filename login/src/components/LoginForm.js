import React, {useEffect, useState} from 'react';
import useForm from "./useForm";
//import {Link} from 'react-router-dom';


const LoginForm = ({ submitForm }) => {
    const {handleChange, handleFormSubmit, values, errors} = useForm(submitForm);
  return(
    <div className='container'>
      <div className='app-wrapper'>
          <div>
              <h2 className='title'>Login</h2>
          </div>
          <form className='form-wrapper'>
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
              
              <div className='password'>
                  <label className='label'>Password</label>
                  <input className='input' type="password" name='password' value={values.password}
                  onChange={handleChange}
                  />
                 {errors.password && <p className='error'>{errors.password}</p> }
              </div>
              <div>
                  <input type="checkbox"/> <span>Remember Me</span>
              </div>
              <div>
                  <button className='submit' onClick={handleFormSubmit}>Login</button>
              </div>
              
              <p>Don't have account?<span className='x'>Sign Up</span></p>

          </form>
      </div>

    </div>
  )
};
export default LoginForm; 
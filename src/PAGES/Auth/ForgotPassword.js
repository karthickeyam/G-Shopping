import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import { Link } from 'react-router-dom'
import './AuthPage.css'

const ForgotPassword = () => {
  return (
    <div className='authpage'>
        <Navbar/>

        <div className='authcont'>
            <img src='https://static.vecteezy.com/system/resources/previews/008/516/928/non_2x/payment-system-in-supermarket-vector.jpg'
            alt='Signup'  />

            <form className='authform'>
                <h1>Forgot Password</h1>
                
                <div className='formgroup'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email'/>
                </div>
               <div className='form-group-row'>
               <div className='formgroup'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password'/>
                </div>
                <div className='formgroup'>
                    <label htmlFor='cpassword'>Confirm New Password</label>
                    <input type='password' id='cpassword'/>
                </div>
               </div>

               <Link to='/login' className='stylenone'>
               <p>Try Login Again</p>
               </Link>
              
                <Link to='/signup' className='stylenone'>
                <button className='btn'>Verify</button>
                </Link>

            </form>
        </div>
        </div>
  )
}

export default ForgotPassword
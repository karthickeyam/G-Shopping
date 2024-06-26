import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import { Link } from 'react-router-dom'
import './AuthPage.css'

const Signup = () => {
  return (
    <div className='authpage'>
        <Navbar/>

        <div className='authcont'>
            <img src='https://static.vecteezy.com/system/resources/previews/008/516/928/non_2x/payment-system-in-supermarket-vector.jpg'
            alt='Signup'  />

            <form className='authform'>
                <h1>Signup</h1>
                <div className='form-group-row'>
                <div className='formgroup'>
                    <label htmlFor='fname'>First Name</label>
                    <input type='text' id='fname'/>
                </div>
                <div className='formgroup'>
                    <label htmlFor='lname'>Last Name</label>
                    <input type='text' id='lname'/>
                </div>
                </div>
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
                    <label htmlFor='cpassword'>Confirm Password</label>
                    <input type='password' id='cpassword'/>
                </div>
               </div>

               <Link to='/login' className='stylenone'>
               <p>Already have an account?</p>
               </Link>
              
                <Link to='/signup' className='stylenone'>
                <button className='btn'>Signup</button>
                </Link>

            </form>
        </div>
        </div>
  )
}

export default Signup
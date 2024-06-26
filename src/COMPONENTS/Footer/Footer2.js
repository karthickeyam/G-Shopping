import React from 'react'
import './Footer2.css'
import paying from '../../ASSETS/pay.png'
import logo from '../../ASSETS/g-shop.png'
import social from '../../ASSETS/social.png'
import { FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
const Footer2 = () => {
  return (
    <div className='footer'>
        <div className='footerin1'>
            <div className='f1'>
                <img src={logo} alt='logo' className='logo'/>
                <p>G-Shop is a leading online grocery store 
                    in the India. We are committed to providing the 
                    best quality products at the best prices.</p>
                    <ul className='homeLi'>
            <li><a href="https://karthi.manik22@gmail.com"><AiOutlineMail className="icon" /></a></li>
            <li><a href="https://www.instagram.com/k_a_r_t_h_i_c_k_e_y_an/"> <FaInstagram className="icon"/></a></li>
            <li><a href="https://www.facebook.com/karthik.manikam/"><CiFacebook className="icon" /></a></li>
            <li><a href="https://x.com/KARTHIC25642919"> <FaXTwitter className="icon"/></a></li>
            
            </ul>
            </div>
            <div className='f2'>
                <h3>About us</h3>
                <p>About us</p>
                <p>Contact us</p>
                <p>About team</p>
                <p>Customer Support</p>
            </div>
            <div className='f2'>
            
                    <h3>Our Information</h3>
                    <p>Privacy Policy update </p>
                    <p>Teams & Conditions</p>
                    <p>Return Policy</p>
                    <p>Site Map</p>
            </div>
            <div className='f2'>
                <h3>Community</h3>
                <p>Announcement</p>
                <p>Answer center</p>
                <p>Discussion boards</p>
                <p>Giving works</p>
            </div>
            <div className='f2'>
                <h3>Subscribe Now</h3>
                <p>Subscribe your email for newsletter and 
                    feature news based on your interest
                </p>
                <div className='inputcontainer'>
                    <span className='icon1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
                    </svg>
                    </span>
                    <input type='text' placeholder='Enter your email' />
                    <span className='icon2'>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                         </svg>

                    </span>
                </div>
            </div>
        </div>
        <div className='footerin2'>
            <h3>&copy; Copyright G-Shop, Inc. All rights reserved</h3>
            <img src={paying} alt='paying'/>
        </div>
    </div>
  )
}

export default Footer2
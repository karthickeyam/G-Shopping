import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../ASSETS/g-shop.png'
import Dropdown from 'react-bootstrap/Dropdown'

const Navbar = () => {
    const [ cartquantity, setcartquantity] = useState(0)
  return (
    <nav>
        <div className='s1'>
            <img src={logo} className='logo'/>
            <div className='searchbar'>
                <input type='text'
                placeholder='Search for Porduct and Categries'
                className='search'/>
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

                </button>
            </div>

            <div className='right'>
                <div className='cart'>
                    <span className='qty'>{cartquantity}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>

                </div>
                <div className='user'> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                   </svg>
        </div>
                
            </div>
        </div>
        <div className='s2'>
       <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        Categries
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Fresh Vegetables</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Fresh Fruits</Dropdown.Item>
        <Dropdown.Item href="#/action-3">House Cleaning</Dropdown.Item>
      </Dropdown.Menu>
       </Dropdown>
       <a>About us</a>
       <a>Contact</a>
       <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
         More
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1"> FAQ</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Privacy Policy</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Term & Conditions</Dropdown.Item>
      </Dropdown.Menu>
       </Dropdown>

        </div>
    </nav>
  )
}

export default Navbar
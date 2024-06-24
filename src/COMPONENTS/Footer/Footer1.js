import React from 'react'
import veges from '../../ASSETS/veges.png'
import './Footer1.css'
const Footer1 = () => {
  return (
    <div className='footer1'>
        <div className='left'>
            <img src={veges} alt='veges'/>
        </div>
        <div className='right'>
            <h1>Fresh Vegetables & Fruits at your Home</h1> 
            <p>We Sell fresh and healthy Fruits & Vegetables</p>
        </div>
    </div>
  )
}

export default Footer1
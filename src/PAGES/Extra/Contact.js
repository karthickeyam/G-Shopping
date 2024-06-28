import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import './Extrapages.css'

const Contact = () => {
  return (
    <div className='extrapage'>
         <Navbar />
         <SingleBanner 
          bannerimage='https://png.pngtree.com/thumb_back/fh260/background/20240409/pngtree-empty-shopping-basket-on-wood-table-over-grocery-store-supermarket-blur-image_15653639.jpg'
          heading="Contact Us"
         />
          <div className='pgleft  pgcommon'>
            <img src='https://images.theconversation.com/files/544734/original/file-20230825-19-dja0ah.jpg?ixlib=rb-4.1.0&rect=1517%2C0%2C4191%2C2674&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip'
            alt='noimg'/>
            <div>
                <h1>Our Story</h1>
                <p>Welcome to G-Shop, your one-stop destination for fresh, high-quality groceries. 
                    Our mission is to provide our community with a wide variety of products, from locally-sourced produce to international specialties, 
                    all at competitive prices. We pride ourselves on our friendly customer service and our commitment to sustainability. 
                    At G-Shop, we believe in supporting local farmers and suppliers, reducing our environmental footprint, 
                    and fostering a welcoming atmosphere for all our customers. Whether you're doing your weekly shopping or looking for something special, 
                    we're here to meet your needs and exceed your expectations. Thank you for choosing G-Shop.
                    where quality, value, and community come together.</p>
            </div>
        </div>
        <div className='pgright  pgcommon'>
            <img src='https://t4.ftcdn.net/jpg/05/32/81/25/360_F_532812571_2Fzs20otX5pbSCqZG4jXEROYEiBExPQA.jpg'
            alt='noimg'/>
            <div>
                <h1>Who Are We</h1>
                <p>At G-Shop, we are a dedicated team of food enthusiasts and community members passionate about bringing the best products to your table. 
                    Founded in 2024, our store has grown from a small family-owned business to a beloved local staple. Our staff is knowledgeable, friendly, and always ready to help you find exactly what you need. 
                    We take pride in our diverse selection, from organic and gluten-free options to gourmet and international foods. Our goal is to create a shopping experience that is not only convenient but also enjoyable.
                     We are more than just a grocery store; we are a part of your community, committed to making everyday life a little brighter and healthier.
                     </p>
            </div>
        </div>
        <form className='extrapageform'>
            <h1 className='formheading'>Get in Touch</h1>
                                <div className='fromgroup'>
                                    <label htmlFor="">Name</label>
                                    <input type="text" />
                                </div>

                                <div className='fromgroup'>
                                    <label htmlFor="">Email</label>
                                    <input type="email" />
                                </div>

                                <div className='fromgroup'>
                                    <label htmlFor="">Message</label>
                                    <textarea name="" id="" cols="30" rows="10"></textarea>
                                </div>
                                    <button>Submit</button>
                            </form>
        <Footer1 />
        <Footer2/>
        </div>
  )
}

export default Contact
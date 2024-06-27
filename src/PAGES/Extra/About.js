import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import './Extrapages.css'

const About = () => {
  return (
    <div className='extrapage'>
        <Navbar />
        <SingleBanner 
        heading="About us"
        bannerimage='https://aarp.widen.net/content/zw6j58bo0z/jpeg/GS172172.jpg?crop=true&anchor=17,225&q=80&color=ffffffff&u=ovnylx&w=2027&h=1165'
        />
        <div className='pgleft pgcommon'>
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
            <img src='https://images.theconversation.com/files/544734/original/file-20230825-19-dja0ah.jpg?ixlib=rb-4.1.0&rect=1517%2C0%2C4191%2C2674&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip'
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
        <Footer1 />
        <Footer2/>
    </div>
  )
}

export default About
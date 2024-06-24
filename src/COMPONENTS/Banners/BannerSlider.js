import React from 'react'
import Slider from 'react-slick'
import './BannerSlider.css'
const BannerSlider = () => {
    const data = [
        {
            id:1,
            image:'https://www.groferbazar.com/cdn/shop/files/Slider_Banner_1_0909755e-909e-421f-881c-f532b74cf8c2_2000x.jpg?v=1614353564',
            title:'Fresh Vegetables & fruits at your doorstep',
            description: 'we deliver fresh vegetable & fruits at your doorstep',
            button: 'htttps://www.google.com'
        },
        {
            
            id:2,
            image:'https://png.pngtree.com/thumb_back/fh260/background/20240409/pngtree-empty-shopping-basket-on-wood-table-over-grocery-store-supermarket-blur-image_15653639.jpg',
            title:'Fresh Vegetables & fruits at your doorstep',
            description: 'we deliver fresh vegetable & fruits at your doorstep',
            button: 'htttps://www.google.com'
        }
    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      
  return (
    <div className='bannerslider'>
        <Slider className='bannerslider'{...settings}>
            {
                data.map(item=>{
                    return(
                        <div className='imagecont' key={item.id}>
                            <img src={item.image} alt='noimg'/>
                            <div className='content'>
                                <h1>{item.title}</h1>
                                <span>{item.description}</span>
                                <button>Shop More</button>
                            </div>
                            </div>
                    )
                })
            }
        </Slider>
    </div>
  )
}

export default BannerSlider
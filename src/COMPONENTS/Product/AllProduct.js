import React from 'react'
import ProductCard from './ProductCard'
import img1 from '../../ASSETS/product/p1.png'
import img2 from '../../ASSETS/product/p2.png'
import img3 from '../../ASSETS/product/p3.png'
import img4 from '../../ASSETS/product/p4.png'
import img5 from '../../ASSETS/product/p5.png'
import img6 from '../../ASSETS/product/p6.png'
import img7 from '../../ASSETS/product/p7.png'
import img8 from '../../ASSETS/product/p8.png'
import img9 from '../../ASSETS/product/p9.png'
import img10 from '../../ASSETS/product/p10.png'
import './AllProduct.css'
const AllProduct = () => {
    const products = [
        {
            id:1,
            productimage: img1,
            productname: 'ORGANIC BROWN SUGAR',
            productprice: 100,
            counttype: '1 each',
            discountprecent: 12
        },
        {
            id:2,
            productimage: img2,
            productname: 'TOMATO',
            productprice: 200,
            counttype: '1 per kg',
            discountprecent: 12
        },
        {
            id:3,
            productimage: img3,
            productname: 'ONION',
            productprice: 300,
            counttype: '1 per kg',
            discountprecent: 13
        },
        {
            id:4,
            productimage: img4,
            productname: 'STRAWBERRY',
            productprice: 400,
            counttype: '1 per kg',
            discountprecent: 12
        },
        {
            id:5,
            productimage: img5,
            productname: 'AVOCADO',
            productprice: 100,
            counttype: '1 per kg',
            discountprecent: 12
        },
        {
            id:6,
            productimage: img6,
            productname: 'CHANA DAL',
            productprice: 200,
            counttype: '1 each',
            discountprecent: 12
        },
        {
            id:7,
            productimage: img7,
            productname: 'TATA SOULFULL MILLET GRANOLA',
            productprice: 300,
            counttype: '1 each',
            discountprecent: 13
        },
        {
            id:8,
            productimage: img8,
            productname: 'BUTTER COOLIES',
            productprice: 400,
            counttype: '1 each',
            discountprecent: 12
        },
        {
            id:9,
            productimage: img9,
            productname: 'BABY BACK RIBS POTATO CHIPS',
            productprice: 300,
            counttype: '1 each',
            discountprecent: 13
        },
        {
            id:10,
            productimage: img10,
            productname: 'HARPIC',
            productprice: 400,
            counttype: '1 each',
            discountprecent: 12
        },
    ]
  return (
    <div className='allproducts'>
       <h1>All Products</h1>
       <div className='products'>
            {
                products.map((item) => {
                    return (
                        <ProductCard data={item}
                        key={item.id}/>
                    )
                })
            }
       </div>
    </div>
  )
}

export default AllProduct
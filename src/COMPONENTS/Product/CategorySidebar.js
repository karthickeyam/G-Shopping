import React from 'react'
import img1 from '../../ASSETS/Image/1.png'
import img2 from '../../ASSETS/Image/2.png'
import img3 from '../../ASSETS/Image/3.png'
import img4 from '../../ASSETS/Image/4.png'
import './CategorySidebar.css'
const CategorySidebar = () => {
    const data = [
        {
            id:1,
            categoryimage : img1,
            categoryname : 'categrory 1'

        },
        {
            id:2,
            categoryimage : img2,
            categoryname : 'categrory 2'

        },
        {
            id:3,
            categoryimage : img3,
            categoryname : 'categrory 3'

        },
        {
            id:4,
            categoryimage : img4,
            categoryname : 'categrory 4'

        },
        {
            id:5,
            categoryimage : img1,
            categoryname : 'categrory 5'

        },
        {
            id:6,
            categoryimage : img2,
            categoryname : 'categrory 6'

        },
        {
            id:7,
            categoryimage : img3,
            categoryname : 'categrory 7'

        },
        {
            id:8,
            categoryimage : img4,
            categoryname : 'categrory 8'

        },
    ]
  return (
    <div className='categorysidebar'>
        {
            data.map((item) => {
                return (
                    <div className='category'>
                    <img src={item.categoryimage}
                    alt='categoryimage'/>
                    <h3>{item.categoryname}</h3>
                </div>
                )
            })
        }
    </div>
  )
}

export default CategorySidebar
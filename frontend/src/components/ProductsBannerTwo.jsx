import React from 'react'
import banner1 from "../assets/gdg_banner1.jpg";
import banner2 from "../assets/gdg_banner2.jpg";
 


function ProductsBannerTwo() {
  return (
    <div className='flex justify-center my-8'>
        <div className="md:flex gap-3">
      <img className="w-[400px] h-[300px] object-cover rounded-lg" src={banner1} alt="" />
      <img className="w-[400px] h-[300px]  object-cover rounded-lg" src={banner2} alt="" />
      <img className="w-[400px] h-[300px]  object-cover rounded-lg" src={banner2} alt="" />
    </div>
    </div>
  )
}

export default ProductsBannerTwo
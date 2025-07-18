import React from 'react'
import banner1 from "../assets/gdg_banner1.jpg";
import banner2 from "../assets/gdg_banner2.jpg";



function ProductsBannerTwo() {
  return (
    <div className='flex justify-center my-8'>
      <div className="md:flex gap-8">
        <img className="w-[600px] h-[400px] object-cover rounded-lg" src={banner1} alt="" />
        <div className='flex flex-col gap-1.5'>
          <img className="w-[600px] h-[200px]  object-cover rounded-lg" src={banner2} alt="" />
          <img className="w-[600px] h-[200px]  object-cover rounded-lg" src={banner2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ProductsBannerTwo
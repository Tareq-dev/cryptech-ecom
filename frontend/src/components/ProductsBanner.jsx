import React from 'react'
import banner1 from "../assets/gdg_banner1.jpg";
import banner2 from "../assets/gdg_banner2.jpg";
 


function ProductsBanner() {
  return (
    <div className="md:flex justify-between gap-4 m-16">
      <img className="w-[600px] h-[400px] object-cover rounded-lg" src={banner1} alt="" />
      <img className="w-[600px] h-[400px] object-cover rounded-lg" src={banner2} alt="" />
    </div>
  )
}

export default ProductsBanner
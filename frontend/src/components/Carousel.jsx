import React from 'react'

function Carousel() {
  return (
   <div className='md:mx-10 mx-4'>
     <div className="carousel w-full h-[300px] md:h-[500px] mx-auto">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://scontent.fdac175-1.fna.fbcdn.net/v/t39.30808-6/495021255_1273117041480820_3112425533783174825_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=NyS0uF-I88sQ7kNvwEHQNNF&_nc_oc=AdlgQ8ltpedSAbkH_3oYkVOsdZv-7A8m7wO_dQr49E37LCoM7xzuMuJ9vkuGymikkdE&_nc_zt=23&_nc_ht=scontent.fdac175-1.fna&_nc_gid=edm0JoHzOiyOAeVkw6qLug&oh=00_AfT5KGAkM7j8C-CYfso5U5Q6WdUVF5V0_cJOPxUZh8g9ug&oe=687B1BD0"
          className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
          className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
          className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
          className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Carousel
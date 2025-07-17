import React from 'react'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import w1 from "../assets/w1.jpg";
import w2 from "../assets/w2.jpg";
import w3 from "../assets/w3.jpg";
import w4 from "../assets/w4.jpg";
import w5 from "../assets/watch.jpg";
import Slider from "react-slick";



const products = [
  { id: 1, name: "Smart Watch", price: "$99", image: w1 },
  { id: 2, name: "Wireless Earbuds", price: "$49", image: w2 },
  { id: 3, name: "Gaming Mouse", price: "$29", image: w3 },
  { id: 4, name: "VR Headset", price: "$149", image: w4 },
  { id: 5, name: "Smartphone", price: "$699", image: w5 },
  { id: 6, name: "Keyboard", price: "$39", image: w4 },
  { id: 7, name: "Smart Glass", price: "$129", image: w1 },
  { id: 8, name: "Speaker", price: "$89", image: w2 },
  { id: 9, name: "Speaker", price: "$89", image: w4 },
  { id: 10, name: "Speaker", price: "$89", image: w3 },
  { id: 11, name: "Speaker", price: "$89", image: w1 },
  { id: 12, name: "Speaker", price: "$89", image: w5 },
  { id: 3, name: "Speaker", price: "$89", image: w2 },
];

function SliderProducts() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} !left-[-60px] z-10 flex items-center justify-center before:!content-none`}
      onClick={onClick}
    >
      <div className="w-12 pb-2 h-12 bg-[#642771] hover:bg-[#4e1b5a] text-white text-3xl rounded-full flex items-center justify-center shadow-lg transition duration-300">
        ‹
      </div>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} !right-[-30px] z-10 flex items-center justify-center before:!content-none`}
      onClick={onClick}
    >
      <div className="w-12 pb-2 h-12 bg-[#642771] hover:bg-[#4e1b5a] text-white text-3xl rounded-full flex items-center justify-center shadow-lg transition duration-300">
        ›
      </div>
    </div>
  );
}

    return (
        <div className="mx-14 my-16">
            <h1 className="text-3xl font-semibold text-center">Smart Essentials 🔥</h1>

            <div className="bg-[#fceeff] rounded-2xl px-10">
                {/* Product Slider */}
                <Slider {...settings}
                    className="py-8 my-8 cursor-pointer "

                >

                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="min-w-[180px] hover:shadow-md max-w-[200px] bg-white shadow border border-gray-100 rounded-2xl  p-4 flex-shrink-0 transition-all duration-300"
                        >
                            <div className="flex justify-center">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="my-4 h-32 object-cover rounded"
                                />
                            </div>
                            <h3 className="text-md text-center font-medium">{product.name}</h3>
                               <p className="text-gray-600 text-center font-semibold my-2 ">{product.price} <span className='line-through ml-2'>$100</span></p>
                            <div className="flex justify-between gap-2">
                                <button className="bg-[#642771] px-2 text-white py-1 rounded text-xs hover:bg-[#642771]">
                                    Buy Now
                                </button>
                                <button className="border border-[#642771] px-2 text-[#642771] py-1 rounded text-xs hover:bg-blue-50">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                    {/* </Slider> */}
                </Slider>

            </div>
        </div>
    )
}

export default SliderProducts
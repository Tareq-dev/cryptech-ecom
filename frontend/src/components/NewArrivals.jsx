import React from 'react'
import w1 from "../assets/w1.jpg";
import w2 from "../assets/w2.jpg";
import w3 from "../assets/w3.jpg";
import w4 from "../assets/w4.jpg";
import w5 from "../assets/watch.jpg";


const products = [
  { id: 1, name: "Smart Watch", price: "$99", image: w1 },
  { id: 2, name: "Wireless Earbuds", price: "$49", image: w2 },
  { id: 3, name: "Gaming Mouse", price: "$29", image: w3 },
  { id: 4, name: "VR Headset", price: "$149", image: w4 },
  { id: 5, name: "Smartphone", price: "$699", image: w5 },
  { id: 6, name: "Keyboard", price: "$39", image: w4 },
  { id: 7, name: "Smart Glass", price: "$129", image: w1 },
  { id: 8, name: "Speaker", price: "$89", image: w2 },
  { id: 9, name: "Speaker", price: "$89", image: w2 },
  { id: 10, name: "Speaker", price: "$89", image: w2 },
  { id: 11, name: "Speaker", price: "$89", image: w2 },
  { id: 12, name: "Speaker", price: "$89", image: w2 },
  { id: 3, name: "Speaker", price: "$89", image: w2 },
];

function NewArrivals() {
  return (
    <div className="my-16">
      <h1 className="text-3xl font-semibold mt-6 text-center">New Arrivals</h1>
      <div className="p-18">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8  ">
          {products.slice(0, 12).map((product) => (
            <div
              key={product.id}
              className="bg-white shadow border border-gray-100 rounded-2xl p-4 transition-all duration-300 hover:shadow-md"
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
                <button className="bg-[#642771] px-2 text-white py-1 rounded text-xs hover:bg-[#4e1b5a]">
                  Buy Now
                </button>
                <button className="border border-[#642771] px-2 text-[#642771] py-1 rounded text-xs hover:bg-blue-50">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default NewArrivals
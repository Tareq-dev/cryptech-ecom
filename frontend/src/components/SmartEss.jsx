
import w5 from "../assets/watch.jpg";
import w1 from "../assets/w1.jpg";
import w2 from "../assets/w2.jpg";
import w3 from "../assets/w3.jpg";
import w4 from "../assets/w4.jpg";
import { useRef } from "react";


const SmartEss = () => {
 const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
    const products = [
        { id: 1, name: "Smart Watch", price: "$99", image: w1 },
        { id: 2, name: "Wireless Earbuds", price: "$49", image: w2 },
        { id: 3, name: "Gaming Mouse", price: "$29", image: w3 },
        { id: 4, name: "VR Headset", price: "$149", image: w4 },
        { id: 5, name: "Smartphone", price: "$699", image: w5 },
        { id: 6, name: "Keyboard", price: "$39", image: w4 },
        { id: 7, name: "Smart Glass", price: "$129", image: w1 },
        { id: 8, name: "Speaker", price: "$89", image: w2 },
        { id: 8, name: "Speaker", price: "$89", image: w2 },
        { id: 8, name: "Speaker", price: "$89", image: w2 },
        { id: 8, name: "Speaker", price: "$89", image: w2 },
        { id: 8, name: "Speaker", price: "$89", image: w2 },
        { id: 8, name: "Speaker", price: "$89", image: w2 },
    ];

    const handleMouseDown = (e) => {
    isDragging.current = true;
    sliderRef.current.classList.add("cursor-grabbing");
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isDragging.current = false;
    sliderRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // scroll speed
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const scrollByButton = (amount) => {
    sliderRef.current.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };


    return (
    <div className="my-8">
      <h1 className="text-3xl font-semibold text-center">Ready for Order 🔥</h1>

      <div className="relative group px-4 py-6 mx-4">
        {/* Product Slider */}
        <div
          ref={sliderRef}
          className="flex gap-4 py-8 overflow-x-scroll scrollbar-hide cursor-grab select-none"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[180px] max-w-[200px] bg-white rounded-xl shadow-xl hover:shadow-lg p-4 flex-shrink-0 transition-all duration-300"
            >
              <div className="flex justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="my-4 h-32 object-cover rounded"
                />
              </div>
              <h3 className="text-md text-center font-medium">{product.name}</h3>
              <p className="text-gray-600 text-center my-2">{product.price}</p>
              <div className="flex justify-between gap-2">
                <button className="bg-blue-600 px-2 text-white py-1 rounded text-xs hover:bg-blue-700">
                  Buy Now
                </button>
                <button className="border border-blue-600 px-2 text-blue-600 py-1 rounded text-xs hover:bg-blue-50">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Buttons (optional) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 hidden group-hover:block">
          <button
            onClick={() => scrollByButton(-300)}
            className="w-8 h-8 bg-gray-300/70 hover:bg-gray-500 rounded-full text-white text-lg flex items-center justify-center"
          >
            &#8592;
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-2 hidden group-hover:block">
          <button
            onClick={() => scrollByButton(300)}
            className="w-8 h-8 bg-gray-300/70 hover:bg-gray-500 rounded-full text-white text-lg flex items-center justify-center"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
    );
};

export default SmartEss;

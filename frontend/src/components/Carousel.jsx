import React, { useState, useEffect } from 'react';
import bb1 from '../assets/bb1.jpg';
import bb2 from '../assets/bb2.jpg';
import bb3 from '../assets/bb3.jpg';
import bb4 from '../assets/bb4.png';

function Carousel() {
  const images = [bb1,bb2,bb3,bb4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-7xl h-[450px] mx-auto overflow-hidden shadow-lg rounded-xl">
      {/* Slides container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0 h-[450px]">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Left arrow */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        ❮
      </button>

      {/* Right arrow */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        ❯
      </button>
    </div>
  );
}

export default Carousel;

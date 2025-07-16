import React, { useState, useRef } from "react";

const DropdownMenu = () => {
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState("Select Category");

  // Timeout ref for delay
  const timeoutRef = useRef(null);

  const categories = {
    Gadget: ["Smart Glass", "VR Headset", "Action Camera"],
    Phone: ["iPhone", "Samsung", "OnePlus"],
    Watch: ["Apple Watch", "Samsung Watch", "Fitbit"],
    "Medical Accessories": ["Thermometer", "Oximeter", "BP Monitor"],
    "PC Accessories": ["Keyboard", "Mouse", "Webcam"],
  };

  const handleSelect = (main, sub) => {
    setSelected(`${main} - ${sub}`);
    setHovered(null);
  };

  const handleMouseEnter = (main) => {
    clearTimeout(timeoutRef.current); // cancel any pending close
    setHovered(main);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHovered(null);
    }, 200); // 200ms delay before closing
  };

  return (
    <div className="w-full font-sans">
      
      {/* Horizontal Menu */}
      <div className="flex justify-center space-x-4 bg-white py-1">
        {Object.entries(categories).map(([main, subs]) => (
          <div
            key={main}
            className="relative"
            onMouseEnter={() => handleMouseEnter(main)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Main Button */}
            <div className="px-4 py-2 text-gray-800 text-sm font-medium hover:bg-blue-100 cursor-pointer rounded">
              {main}
            </div>

            {/* Dropdown */}
            <div
              className={`absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 shadow-lg z-30 transition-all duration-300 ease-in-out transform ${
                hovered === main
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-2 invisible"
              }`}
            >
              {subs.map((sub) => (
                <div
                  key={sub}
                  onClick={() => handleSelect(main, sub)}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 cursor-pointer"
                >
                  {sub}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;

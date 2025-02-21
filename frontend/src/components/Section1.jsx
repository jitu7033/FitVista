import React from "react";
import img from "../Assets/bgimg.jpg"; // Correct import

const Section1 = () => {
  return (
    <div 
      className="relative h-screen w-screen flex items-center justify-center bg-cover bg-center px-10"
      style={{ backgroundImage: `url(${img})` }} // Corrected background image
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-lg text-white text-center">
        <h1 className="text-6xl font-bold">FitVista</h1>
        <p className="text-xl mt-4 text-gray-300">Hacking fitness, one rep at a time</p>
      </div>
    </div>
  );
};

export default Section1;

import React from "react";

const Section1 = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?fitness,gym')" }}>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center px-6 max-w-3xl">
        <h2 className="text-lg uppercase tracking-widest text-gray-300">Base Fit - Functional Fitness Studio</h2>
        <h1 className="text-5xl font-bold leading-tight mt-2">
          Where Fitness Becomes Your <span className="text-purple-400">Lifestyle</span>
        </h1>
        <button className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 transition duration-300 rounded-lg text-white font-semibold">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Section1;

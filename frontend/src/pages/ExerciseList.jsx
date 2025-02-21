import React from "react";
// import index from "../index.css";
const ExerciseList = () => {
  return (
    <>
      <div className="">
        <h1 className="font-bold text-5xl m-5 p-5">Our Challenges</h1>
      </div>
      <div>
        <p className="text-2xl m-5 p-5">
          Step by step Challenges to keep you strong <br /> and motivated.
        </p>
      </div>
      
      <div>
        <div className="bg-white text-black">
          <h1 className="font-bold text-3xl">
            Be Full Body <br /> Strong
          </h1>
          <button className="text-white bg-violet-400 text-l">
            View Details
          </button>
        </div>
        <div>
          <h1 className="font-bold text-3xl">
            Arms, Arms, <br /> Arms!
          </h1>
          <button className="text-white bg-violet-400 text-l">
            View Details
          </button>
        </div>
        <div>
          <h1 className="font-bold text-3xl">
            10 Days Squats <br /> Challenge!
          </h1>
          <button className="text-white bg-violet-400 text-l">
            View Details
          </button>
        </div>
      </div>
    </>
  );
};

export default ExerciseList;
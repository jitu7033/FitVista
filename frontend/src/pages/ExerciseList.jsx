/* eslint-disable no-unused-vars */
import React from "react";

const ExerciseList = () => {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center">
      <div className="text-center">
        <h1 className="font-bold text-5xl m-5 p-5">Our Challenges</h1>
      </div>

      <div>
        <p className="text-2xl m-5 p-5 text-center">
          Step by step Challenges to keep you strong <br />
          <span className="block">and motivated.</span>
        </p>
      </div>

      <div className="flex justify-center gap-5 w-full p-5">
        <div className="bg-white text-black p-5 rounded-lg w-80 h-55 text-center">
          <h1 className="font-bold text-3xl">
            Be Full Body <br /> Strong
          </h1>
          <button
            className="mt-3 px-4 py-2 text-white bg-purple-500 rounded-md cursor-pointer mt-9"
            onClick={() =>
              window.open(
                "https://youtu.be/UIPvIYsjfpo?si=qn9Yym2EUd-fUR-Y",
                "_blank"
              )
            }
          >
            View Details
          </button>
        </div>
        <div className="bg-white text-black p-5 rounded-lg w-80 h-55 text-center">
          <h1 className="font-bold text-3xl">
            Arms, Arms, <br /> Arms!
          </h1>
          <button
            className="mt-3 px-4 py-2 text-white bg-purple-500 rounded-md cursor-pointer mt-9"
            onClick={() =>
              window.open(
                "https://youtu.be/rdaIUhFWCpg?si=ftR-9D4uTvyILMae",
                "_blank"
              )
            }
          >
            View Details
          </button>
        </div>
        <div className="bg-white text-black p-5 rounded-lg w-80 h-55 text-center">
          <h1 className="font-bold text-3xl">
            10 Days Squats <br /> Challenge!
          </h1>
          <button
            className="mt-3 px-4 py-2 text-white bg-purple-500 rounded-md cursor-pointer mt-9"
            onClick={() =>
              window.open(
                "https://youtu.be/YkMu4IFSSMs?si=BR89Ykh9lGO439tn",
                "_blank"
              )
            }
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseList;
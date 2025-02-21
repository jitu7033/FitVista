import React from "react";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";

const Home = ({ homeRef, aboutRef, contactRef }) => {
  return (
    <div className="flex flex-col">
      {/* Sections */}
      <div ref={homeRef} className="min-h-screen bg-lightblue flex items-center justify-center">
        <Section1 />
      </div>
      <div ref={aboutRef} className="min-h-screen bg-lightgreen flex items-center justify-center">
        <Section2 />
      </div>
    </div>
  );
};

export default Home;
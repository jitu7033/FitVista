import React from "react";
import Section1 from "../components/Section1";

const Home = ({ homeRef, aboutRef, contactRef }) => {
  return (
    <div>
      {/* Sections */}
      <div ref={homeRef} className="h-screen bg-lightblue flex items-center justify-center">
        <Section1 />
      </div>
      <div ref={aboutRef} className="h-screen bg-lightgreen flex items-center justify-center">
        <h1>About Section</h1>
      </div>
      <div ref={contactRef} className="h-screen bg-lightcoral flex items-center justify-center">
        <h1>Contact Section</h1>
      </div>
    </div>
  );
};

export default Home;
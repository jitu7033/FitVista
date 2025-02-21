const About = () => {
  return (
    <div className="flex flex-col mt-1">
      {/* First Section */}
      <div className="relative flex min-h-screen items-center gap-1">
        {/* Left Section - Fixed Image */}
        <div className="w-1/2 h-screen sticky top-0 flex">
          <img
            src="src/assets/about1.jpg"
            alt="FitVista Gym"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section - Text with Equal Height */}
        <div className="w-1/2 h-screen bg-black text-white flex flex-col justify-center p-12">
          <h2 className="text-5xl font-bold">About FitVista</h2>
          <p className="mt-6 text-lg leading-relaxed">
            Welcome to <strong>FitVista</strong>, your ultimate fitness destination! 
            We provide state-of-the-art equipment, expert trainers, and a vibrant 
            community to help you achieve your health goals. Whether you're a beginner 
            or a pro athlete, FitVista is designed to empower you with personalized 
            workout plans, group sessions, and AI-powered fitness tracking.
          </p>
          <p className="mt-4 text-lg">
            Join us today and take the first step towards a healthier, stronger you!
          </p>
          <button className="mt-8 px-6 py-3 bg-purple-500 hover:bg-[#483D8B] text-white text-lg font-semibold">
            Read More
          </button>
        </div>
      </div>

      {/* Spacing Between Sections */}
      <div className="mt-1"></div>

      {/* Second Section - Swapped Layout */}
      <div className="relative flex min-h-screen items-center gap-1">
        {/* Left Section - Text Now on Left */}
        <div className="w-1/2 h-screen bg-black text-white flex flex-col justify-center p-12">
          <h2 className="text-5xl font-bold">Why Choose FitVista?</h2>
          <p className="mt-6 text-lg leading-relaxed">
            At <strong>FitVista</strong>, we prioritize <strong>results</strong> and <strong>innovation</strong>. 
            Our AI-powered fitness tracking ensures that every workout is tailored to 
            your unique needs. Our community-driven approach fosters motivation, 
            accountability, and long-term success.
          </p>
          <p className="mt-4 text-lg">
            With cutting-edge equipment, dynamic workout programs, and certified trainers, 
            FitVista is more than just a gym—it's a lifestyle.
          </p>
          <button className="mt-8 px-6 py-3 bg-purple-500 hover:bg-[#483D8B] text-white text-lg font-semibold">
            Read More
          </button>
        </div>

        {/* Right Section - Image Now on Right */}
        <div className="w-1/2 h-screen sticky top-0 flex">
          <img
            src="src/assets/about2.jpg"
            alt="FitVista Training"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Add space after second section */}
      <div className="mt-1"></div>
    </div>
  );
};

export default About;
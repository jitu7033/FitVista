import { FaUser } from "react-icons/fa";
import {Link} from "react-router-dom";

const Navbar = ({ homeRef, aboutRef, contactRef }) => {
  const scrollToSection = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const user = localStorage.getItem("client");

  return (
    <nav className="bg-black text-white py-6 px-8 flex justify-between items-center fixed w-full top-0 z-50">
      {/* Left Side - Navigation Links */}
      <ul className="flex space-x-6 text-xl">
        <Link to="/"><li
          className="text-purple-400 font-semibold cursor-pointer"
          onClick={() => scrollToSection(homeRef)}
        >
          Home
        </li>
        </Link>
        <Link to="/about"><li
          className="hover:text-gray-400 cursor-pointer"
          onClick={() => scrollToSection(aboutRef)}
        >
          About
        </li>
        </Link>
        {user && (<Link to="/exerciseList">
          <li className="hover:text-gray-400 cursor-pointer">Exercise List</li>
        </Link>)}
        <li
          className="hover:text-gray-400 cursor-pointer"
          onClick={() => scrollToSection(contactRef)}
        >
          Contact
        </li>
      </ul>

      {/* Right Side - Membership Button and Login */}
      <div className="flex items-center space-x-4">
        {user && (
          <Link to="/leaderboard">
            <button className="bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-md">
              Leaderboard
            </button>
          </Link>
        )}
        <Link to="/login">
          <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-400">
            <FaUser className="text-lg" />
            <span>Log In</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

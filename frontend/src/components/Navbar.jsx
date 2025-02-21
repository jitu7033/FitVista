
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ homeRef, aboutRef, contactRef }) => {
  const navigate = useNavigate();

  // Check if user is logged in
  const token = localStorage.getItem("token");

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    navigate("/"); // Redirect to login page
  };

  const scrollToSection = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-black text-white py-6 px-8 flex justify-between items-center fixed w-full top-0 z-50">
      {/* Left Side - Navigation Links */}
      <ul className="flex space-x-6 text-xl">
        <Link to="/">
          <li className="text-purple-400 font-semibold cursor-pointer">Home</li>
        </Link>
        <Link to="/about">
          <li className="hover:text-gray-400 cursor-pointer">About</li>
        </Link>
        {token && (
          <Link to="/exerciseList">
            <li className="hover:text-gray-400 cursor-pointer">Exercise List</li>
          </Link>
        )}
        <Link to="/contact">
        <li
          className="hover:text-gray-400 cursor-pointer"
          onClick={() => scrollToSection(contactRef)}
        >
          Contact
        </li>
        </Link>
      </ul>

      {/* Right Side - Leaderboard and Logout/Login */}
      <div className="flex items-center space-x-4">
        {token ? (
          <>
            <Link to="/leaderboard">
              <button className="bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-md">
                Leaderboard
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-md"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-400">
              <FaUser className="text-lg" />
              <span>Log In</span>
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


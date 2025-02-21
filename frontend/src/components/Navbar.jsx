import { FaUser } from "react-icons/fa";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 px-8 flex justify-between items-center">
      {/* Left Side - Navigation Links */}
      <ul className="flex space-x-6 text-sm">
        <li className="text-purple-400 font-semibold cursor-pointer">Home</li>
        <li className="hover:text-gray-400 cursor-pointer">About</li>
        <li className="hover:text-gray-400 cursor-pointer">Classes</li>
        <li className="hover:text-gray-400 cursor-pointer">Program List</li>
        <li className="hover:text-gray-400 cursor-pointer">Plans</li>
        <li className="hover:text-gray-400 cursor-pointer">Contact</li>
      </ul>

      {/* Right Side - Membership Button and Login */}
      <div className="flex items-center space-x-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          Membership
        </button>
        <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-400">
          <FaUser className="text-lg" />
          <Link to="/login">
            <span>Log In</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
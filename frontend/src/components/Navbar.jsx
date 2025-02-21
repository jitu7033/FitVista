import { FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ homeRef, aboutRef, contactRef }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to scroll to a section and update the URL
  const scrollToSection = (ref, section) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });

      setTimeout(() => {
        ref?.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      ref?.current?.scrollIntoView({ behavior: "smooth" });
    }

    window.history.pushState(null, "", `/${section}`);
  };

  // ✅ Fix: Ensure valid JSON before parsing
  let user = null;
  const storedUser = localStorage.getItem("client");
  if (storedUser) {
    try {
      user = JSON.parse(storedUser);
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
    }
  }

  return (
    <nav className="bg-black text-white py-6 px-8 flex justify-between items-center fixed w-full top-0 z-50">
      {/* Left Side - Navigation Links */}
      <ul className="flex space-x-6 text-xl">
        <li className="text-purple-400 font-semibold cursor-pointer" onClick={() => scrollToSection(homeRef, "home")}>
          Home
        </li>
        <li className="hover:text-gray-400 cursor-pointer" onClick={() => scrollToSection(aboutRef, "about")}>
          About
        </li>
        {user && (
          <Link to="/exerciseList">
            <li className="hover:text-gray-400 cursor-pointer">Exercise List</li>
          </Link>
        )}
        <li className="hover:text-gray-400 cursor-pointer" onClick={() => scrollToSection(contactRef, "contact")}>
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
        {user ? (
          <div
            onClick={() => {
              localStorage.removeItem("client");
              localStorage.removeItem("token");
              navigate("/login");
            }}
            className="flex items-center space-x-1 cursor-pointer hover:text-gray-400"
          >
            <FaUser className="text-lg" />
            <span>Logout</span>
          </div>
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

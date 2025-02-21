import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-purple-300 text-white p-8"> {/* Changed bg-blue-700 to bg-purple-300 */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Left Side - Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Let's Get Moving</h2>
          <p className="mt-2 text-gray-700">Sign Up For Updates</p>
          <form className="mt-4 space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First name *"
                className="bg-transparent border-b border-gray-800 outline-none w-full text-gray-800"
              />
              <input
                type="text"
                placeholder="Last name *"
                className="bg-transparent border-b border-gray-800 outline-none w-full text-gray-800"
              />
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Email *"
                className="bg-transparent border-b border-gray-800 outline-none w-full text-gray-800"
              />
              <input
                type="text"
                placeholder="Phone"
                className="bg-transparent border-b border-gray-800 outline-none w-full text-gray-800"
              />
            </div>
            <textarea
              placeholder="Type your message here..."
              className="bg-transparent border-b border-gray-800 outline-none w-full text-gray-800"
            ></textarea>
            <button
              type="submit"
              className="bg-gray-800 text-white px-6 py-2 rounded-full font-semibold mt-2"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Middle - Contact Info */}
        <div>
          <h2 className="text-xl font-bold text-gray-800">500 Terry Francine Street</h2>
          <p className="text-gray-700">San Francisco, CA 94158</p>
          <p className="mt-2 font-bold text-gray-800">Email: info@mysite.com</p>
          <hr className="my-4 border-gray-800" />
          <p className="text-gray-700">Tel: 123-456-7890 | Fax: 123-456-7890</p>
          <button className="border border-gray-800 text-gray-800 px-6 py-2 mt-4">
            Book A Trial Class Now
          </button>
        </div>

        {/* Right Side - Navigation & Socials */}
        <div className="text-right">
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline text-gray-800">Home</a></li>
            <li><a href="/about" className="hover:underline text-gray-800">About</a></li>
            <li><a href="/classes" className="hover:underline text-gray-800">Classes</a></li>
            <li><a href="/programs" className="hover:underline text-gray-800">Program List</a></li>
            <li><a href="/plans" className="hover:underline text-gray-800">Plans</a></li>
            <li><a href="/contact" className="hover:underline text-gray-800">Contact</a></li>
          </ul>
          <div className="flex justify-end space-x-4 mt-4 text-gray-800">
            <FaYoutube className="text-2xl cursor-pointer" />
            <FaInstagram className="text-2xl cursor-pointer" />
            <FaFacebookF className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
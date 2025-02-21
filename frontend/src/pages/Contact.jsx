/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div>
      <div className="bg-black min-h-screen flex items-center justify-center p-5">
        <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Get In Touch
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Have any questions or feedback? We'd love to hear from you!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                className="block text-gray-700 font-semibold"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                className="block text-gray-700 font-semibold"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Subject Field */}
            <div>
              <label
                className="block text-gray-700 font-semibold"
                htmlFor="message"
              >
                Your Subject
              </label>
              <textarea
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                placeholder="Your subject here"
                rows="1"
                required
              ></textarea>
            </div>

            {/* Message Field */}
            <div>
              <label
                className="block text-gray-700 font-semibold"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                placeholder="Your message here"
                rows="6"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-purple-500 text-white font-semibold rounded-xl shadow-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transform hover:scale-105 transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
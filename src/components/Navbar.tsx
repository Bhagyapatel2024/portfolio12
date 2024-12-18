import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    //"bg-gray-800 fixed top-0 left-0 w-full z-50 shadow-lg"
    <nav className="bg-black fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-white font-bold text-lg">Bhagya Patel</div>
        {/* Hamburger Menu */}
        <button
          className="text-gray-300 lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:space-x-6 absolute lg:static top-16 left-0 w-full lg:w-auto bg-black lg:bg-transparent shadow-lg lg:shadow-none ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <li className="border-b lg:border-none">
            <a
              href="#"
              className="block lg:inline-block text-gray-300 hover:text-white px-4 py-2 transition-colors"
            >
              Home
            </a>
          </li>
          <li className="border-b lg:border-none">
            <a
              href="#about"
              className="block lg:inline-block text-gray-300 hover:text-white px-4 py-2 transition-colors"
            >
              About
            </a>
          </li>
          <li className="border-b lg:border-none">
            <a
              href="#projects"
              className="block lg:inline-block text-gray-300 hover:text-white px-4 py-2 transition-colors"
            >
              Projects
            </a>
          </li>
          <li className="border-b lg:border-none">
            <a
              href="#education"
              className="block lg:inline-block text-gray-300 hover:text-white px-4 py-2 transition-colors"
            >
              Education
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

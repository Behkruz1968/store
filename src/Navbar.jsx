import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './assets/image.png'; // Adjust the path to your logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
          <span className="text-xl font-semibold">Arzon Laboratoriya</span>
        </Link>
        <button className="text-2xl md:hidden focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`md:flex md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
            <li>
              <Link to="/" className="block py-2 px-4 hover:bg-gray-700 rounded" onClick={() => setIsOpen(false)}>
                BOSH SAHIFA
              </Link>
            </li>
            <li>
              <Link to="/services" className="block py-2 px-4 hover:bg-gray-700 rounded" onClick={() => setIsOpen(false)}>
                BIZNING XIZMATLAR
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 px-4 hover:bg-gray-700 rounded" onClick={() => setIsOpen(false)}>
                ALOQA UCHUN
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   
  );
};

export default Navbar;

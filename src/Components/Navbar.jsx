import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    "block px-4 py-2 text-white hover:text-cyan-400 transition-all duration-200 font-medium";

  const activeLink = "text-cyan-400 font-semibold";

  return (
    <nav className="bg-[#0f172a]/60 backdrop-blur-md shadow-md border-b border-cyan-400/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        
        {/* Logo */}
        <NavLink to="/" className="text-3xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
          GreenFork
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {['/', '/menu', '/signin', '/register', '/contact'].map((path, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) => `${linkClass} ${isActive ? activeLink : ''}`}
            >
              {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 py-3 space-y-2 bg-[#0f172a]/95 backdrop-blur-md text-white">
          {['/', '/menu', '/signin', '/register', '/contact'].map((path, index) => (
            <NavLink
              key={index}
              to={path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `${linkClass} ${isActive ? activeLink : ''}`}
            >
              {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="mt-4">
      <div
        className="hero min-h-screen bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/Img/banner.jpg')",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl px-4">
            <h2 className="text-yellow-400 text-xl font-medium mb-2">-- Check It Out --</h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">From Our Menu</h1>
            <p className="mb-6 text-lg">Delicious dishes served fresh all day from 11AM to 10PM.</p>
            <NavLink to="/menu">
              <button className="btn bg-yellow-500 hover:bg-yellow-600 border-none text-black px-6 py-2 rounded-full transition duration-300">
                Order Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

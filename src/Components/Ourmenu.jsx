import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='mt-4'>
      <div
        className="hero min-h-screen bg-fixed"
        style={{
          backgroundImage: "url(../../../public/Img/banner.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md text-white">
            <h1 className="mb-4 text-xl font-semibold">--Check It Out--</h1>
            <h1 className="mb-4 text-2xl ">From Our Menu</h1>
            <img src="../../../public/Img/banner.jpg" alt=""  />
            <NavLink to='/menu'><button className="btn btn-secondary">Order Now</button></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
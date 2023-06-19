import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/Group.png';
import logo2 from '../../../assets/Group 1000007008.png';
import arrowIcon from '../../../assets/Icon.png';



const Navbar = () => {
  return (
    <nav className="bg-white text-[#404040]  flex items-center justify-between py-4 pl-[300px] pr-[320px] w-[1920px]">
      <div className="flex items-center gap-[12px]  ">
        <img  src={logo} alt="Logo" className="w-[76px] h-[48]" />
        <img src={logo2} alt="Logo" className="w-[120px] h-[38]" />
      </div>
      <div className="flex items-center font-medium text-[20px] space-x-6">
        <NavLink
          exact
          to="/"
          className="hover:text-gray-300"
          activeClassName="text-gray-300"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="hover:text-gray-300"
          activeClassName="text-gray-300"
        >
          About Us
        </NavLink>
        <NavLink
          to="/services"
          className="hover:text-gray-300"
          activeClassName="text-gray-300"
        >
          Services
        </NavLink>
        <NavLink
          to="/pricing"
          className="hover:text-gray-300"
          activeClassName="text-gray-300"
        >
          Pricing
        </NavLink>
        <NavLink
          to="/blog"
          className="hover:text-gray-300"
          activeClassName="text-gray-300"
        >
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          className="hover:text-gray-300"
          activeClassName="text-gray-300"
        >
          Contact
        </NavLink>
      </div>
      <div>
        <button className="text-[#404040] font-medium text-[18px] flex items-center gap-[10px] border-[1px] border-black py-2 px-4 rounded">
          Free Consultation
          <img src={arrowIcon} alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

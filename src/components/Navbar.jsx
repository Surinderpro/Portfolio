import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='header'>
      {/* Removed logo section */}
      <nav className='flex text-lg gap-7 font-medium ml-auto'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;

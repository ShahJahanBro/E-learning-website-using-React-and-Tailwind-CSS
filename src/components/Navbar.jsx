import React from 'react';
import { IoMdMenu } from "react-icons/io";
import { motion } from 'framer-motion';

const NavbarMenu = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Services", path: "#" },  // Changed 'link' to 'path'
    { id: 3, title: "About Us", path: "#" },
    { id: 4, title: "Our Team", path: "#" },
    { id: 5, title: "Contact Us", path: "#" },
];

export const Navbar = () => {
  return (
    <nav className='relative z-20'>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}  // Added smooth transition
        className="container py-10 flex justify-between items-center"
      >
        {/* Logo Section */}
        <div>
          <h1 className='font-bold text-2xl'>The Coding Journey</h1>
        </div>

        {/* Menu Section */}
        <div className='hidden lg:block'>
          <ul className='flex items-center gap-3'>
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a href={menu.path} className='inline-block py-2 px-3 hover:text-secondary relative group'>
                  <div className='w-2 h-2 bg-secondary absolute mt-2 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 hidden group-hover:block'></div>
                  {menu.title}
                </a>
              </li>
            ))}
            <button className='bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition duration-200'>
              Sign In
            </button>
          </ul>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className='lg:hidden'>
          <IoMdMenu className='text-4xl cursor-pointer' />
        </div>

      </motion.div>
    </nav>
  );
}

export default Navbar;

import React, { useState } from 'react';
import { Icon } from 'react-icons-kit'
import { menu } from 'react-icons-kit/feather/menu'
import { x } from 'react-icons-kit/feather/x'

import '../Navbar/navbar.css'
const Navbar = () => {
      const [toggleMenu, setToggleMenu] = useState(false)
      const toggleNav = () => {
            setToggleMenu((e) => !e)
      }



      return (
            <div className={toggleMenu ? 'navbar expanded' : 'navbar'}>
                  <h1 className='logo'> <span> Hotel</span></h1>
                  <ul>
                        <li >Home</li>
                        <li>Branch</li>
                        <li>Search </li>
                        <li>About Us</li>
                        <li>Pages </li>
                        <li>Blog</li>

                        <button className='btn1 p-1 m-2 text-white'> Reservation </button>
                  </ul>

                  <div className="toggle-icon" onClick={toggleNav}>
                        {toggleMenu ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} />}
                  </div>

            </div>
      );
};

export default Navbar;
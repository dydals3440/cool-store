import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
import { useState } from 'react';

const Navbar = () => {
  const [theme, setTheme] = useState(false);
  const handleTheme = () => {
    setTheme((theme) => !theme);
  };
  return (
    <nav className='bg-base-200'>
      <div className='navbar align-element'>
        <div className='navbar-start'>
          {/* TITLE */}
          <NavLink
            to='/'
            className='hidden lg:flex btn btn-primary text-3xl items-center'
          >
            C
          </NavLink>
          {/* DROPDOWN */}
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <FaBarsStaggered className='h-6 w-6' />
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal'>
            <NavLinks />
          </ul>
        </div>
        <div className='navbar-end'>
          {/* THEME SETUP */}
          <label className='swap swap-rotate'>
            <input type='checkbox' onChange={handleTheme} />
            {/* SUN ICONS */}
            <BsSunFill className='swap-on h4 w4' />
            {/* MOON ICONS */}
            <BsMoonFill className='swap-off h4 w4' />
          </label>
          {/* CART LINK */}
          <NavLink to='/cart' className='btn btn-ghost btn-circle btn-md ml-4'>
            <div className='indicator'>
              <BsCart3 className='h-6 w-6' />
              <span className='badge badge-sm badge-primary indicator-item'>
                8
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

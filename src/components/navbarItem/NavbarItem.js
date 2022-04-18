import React from 'react';
import { Link } from 'react-router-dom';
import './navbarItem.css'
const NavbarItem = ({value, to, exitAfterClick}) => {
   return (
      <li onClick={exitAfterClick} className='navbar__item'>
         <Link className='navbar__item__link' to={`/${to}`}>{value}</Link>
      </li>
   );
};

export default NavbarItem;
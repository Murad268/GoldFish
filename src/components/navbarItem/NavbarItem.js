import React from 'react';
import { Link } from 'react-router-dom';
import './navbarItem.css'
const NavbarItem = ({value, to}) => {
   return (
      <li className='navbar__item'>
         <Link to={`/${to}`}>{value}</Link>
      </li>
   );
};

export default NavbarItem;
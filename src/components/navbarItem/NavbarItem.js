import React from 'react';
import './navbarItem.css'
const NavbarItem = ({value}) => {
   return (
      <li className='navbar__item'>
         <a href="">{value}</a>
      </li>
   );
};

export default NavbarItem;
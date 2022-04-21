import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import logo from '../../images/navbar/l3 1.png'
import tel from '../../images/navbar/Vector.png'
import lupa from '../../images/navbar/lupa.png'
import userLogo from '../../images/navbar/Vector (1).png'
import shopping from '../../images/navbar/eva_shopping-cart-fill.png'
import NavbarItems from '../navbarItems/NavbarItems';
const Navbar = () => {
   return (
    <>
      <div id='nav' className="nav">
       <div className="container">
         <div className="navbar__wrapper">
            <Link to="/" className="navbar__logo">
               <img src={logo} alt="" />
            </Link>
            <div className="navbar__search">
               <input type="text" />
               <img src={lupa} alt="" />
            </div>
            <div className="navbar__contact">
               <div className="nav__telImg">
                  <img src={tel} alt="" />
               </div>
               <div className="nav__tel">
                        +7 (495) 911-10-11
               </div>
            </div>
            <div className="navra__user">
               <img src={userLogo} alt="" />
               <img src={shopping} alt="" />
            </div>
         </div>
        
       </div>
    </div>
      <NavbarItems/>
    </>
   );
};

export default Navbar;
import React from 'react';
import './modal.css'
import NavbarItem from '../navbarItem/NavbarItem';
const Modal = ({exitModal, modalActive, states, exitAfterClick}) => {
   let modalClass = !modalActive ? "modalBlock" : "modalBlock modalBlock__active"

   return (
     
         <div className={modalClass}>
            <ul className="navbar__menu__wrapper">
                  {
                        states.map(state => {
                           
                              return <NavbarItem exitAfterClick={exitAfterClick} to={state.to} key={state.id} value = {state.value}/>
                           
                           
                        })
                  }
            </ul>
         </div>
      
   );
};

export default Modal;
import React from 'react';
import './modal.css'
const Modal = ({exitModal, modalActive}) => {
   let modalClass = !modalActive ? "modalBlock" : "modalBlock modalBlock__active"
   let modal = !modalActive ? "modal" : "modal modal__active"
   return (
      <div onClick={exitModal} className={modal}>
         <div className={modalClass}>

         </div>
      </div>
   );
};

export default Modal;
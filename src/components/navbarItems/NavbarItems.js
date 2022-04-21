import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import NavbarItem from '../navbarItem/NavbarItem';
import './navbarItems.css'
import insta from '../../images/navbar/bi_instagram.png'
import vk from '../../images/navbar/vk.png'
import fb from '../../images/navbar/fb.png'
import Modal from '../modal/Modal';
const NavbarItems = () => {
   const [modalActive, setModalActive] = useState(false)
   const [states, setStates] = useState([
      {id: 1, value: "Каталог", to: "catalog"},
      {id: 2, value: "Wharhammer", to: "warhammer"},
      {id: 3, value: "Magic:the Cathering", to: "magic"},
      {id: 4, value: "Мероприятия", to: "events"},
      {id: 5, value: "О центре", to: "about"},
      {id: 6, value: "Контакты", to: "contacts"},
   ])
   const modalActivated = (e) => {
        document.querySelector(".navbar__hamburger").classList.toggle("active__hambuger")
        setModalActive(prev => !prev)
        if(modalActive === false) {
           document.body.style.overflow = "hidden"
          
        } else {
           document.body.style.overflow = ""
        
        }

     

     
   }
   const exitModal = (e) => {
         e.stopPropagation()
         if(e.target.classList.contains("modal")) {
            document.querySelector(".navbar__hamburger").classList.toggle("active__hambuger")
            setModalActive(false)
            document.body.style.overflow = ""
           
         }      
   }
   const exitAfterClick = () => {
      document.querySelector(".navbar__hamburger").classList.toggle("active__hambuger")
      setModalActive(false)
      document.body.style.overflow = ""
      document.querySelector("html").style.paddingRight = ""
   }
   return (
    <>
      
         
        
    
       <div className="navbarItems">
       <Modal exitAfterClick={exitAfterClick} states={states} modalActive={modalActive} exitModal={exitModal}/>
        <div className="container">
            <div className="navbatItems__wraper">
               <div onClick={modalActivated} className="navbar__hamburger">
                  <span className='firstSpan'></span>
                  <span className='secondSpan'></span>
                  <span></span>
               </div>
           
               
               <ul className='navbar__items__list'>
                  {
                        states.map(state => {
                           
                              return <NavbarItem to={state.to} key={state.id} value = {state.value}/>
                           
                           
                        })
                  }
               </ul>
     
            <div className="navbar__social__link">
               <a href="https://www.instagram.com/club.goldfish/"><img src={insta} alt="" /></a>
               <a href="https://vk.com/goldfishwargames"><img src={vk} alt="" /></a>
               <a href="https://www.facebook.com/magicgoldfish/"><img src={fb} alt="" /></a>
            </div>
            </div>
        </div>
     </div>
    </>
   );
};

export default NavbarItems;
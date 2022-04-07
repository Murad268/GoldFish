import React, {useState} from 'react';
import NavbarItem from '../navbarItem/NavbarItem';
import './navbarItems.css'
import insta from '../../images/navbar/bi_instagram.png'
import vk from '../../images/navbar/vk.png'
import fb from '../../images/navbar/fb.png'
import Modal from '../modal/Modal';
const NavbarItems = () => {
   const [modalActive, setModalActive] = useState(false)
   const [states, setStates] = useState([
      {id: 1, value: "Каталог"},
      {id: 2, value: "Wharhammer"},
      {id: 3, value: "Magic:the Cathering"},
      {id: 4, value: "Мероприятия"},
      {id: 5, value: "О центре"},
      {id: 6, value: "Контакты"},
   ])
   const modalActivated = (e) => {
        document.querySelector(".navbar__hamburger").classList.toggle("active__hambuger")
        setModalActive(prev => !prev)
        if(modalActive === false) {
           document.body.style.overflow = "hidden"
           document.querySelector("html").style.paddingRight = "17px"
        } else {
           document.body.style.overflow = ""
           document.querySelector("html").style.paddingRight = ""
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
   return (
    <>
      
         <Modal modalActive={modalActive} exitModal={exitModal}/>
        
    
       <div className="navbarItems">
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
                        return <NavbarItem key={state.id} value = {state.value}/>
                     })
               }
            </ul>
            <div className="navbar__social__link">
               <a href=""><img src={insta} alt="" /></a>
               <a href=""><img src={vk} alt="" /></a>
               <a href=""><img src={fb} alt="" /></a>
            </div>
            </div>
        </div>
     </div>
    </>
   );
};

export default NavbarItems;
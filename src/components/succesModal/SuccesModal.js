import React from 'react';
import './succesModal.css'
import succes from '../../images/mail/succes.png'
import close from '../../images/mail/close.png'
const SuccesModal = ({exitModal, send}) => {
   let className = send.succes == false?"SuccesModal":"SuccesModal SuccesModal__active"
   return (
      <div className={className}>
         <div onClick={exitModal} className="success__exit">
                  <img src={close} alt="" />
         </div>
         <div className="succesModal__block">        
               <div className="succes__img">
                  <img src={succes} alt="" />
               </div>
               <div className="succes__desc">Sizin bildirişiniz uğurla yerinə çatdırılmışdır. Sizinlə tezliklə əlaqə saxlanılacaq</div>
         </div>
      </div>
   );
};

export default SuccesModal;
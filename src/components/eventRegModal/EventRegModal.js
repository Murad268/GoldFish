import React from 'react';
import { Link } from 'react-router-dom';
import './eventRegModal.css'
const EventRegModal = ({modalActive, exitModal}) => {
   let className = !modalActive?"eventRegModal":"eventRegModal eventRegModal__active"
   return (
      <div onClick={exitModal} className={className}>
         <div className="eventRegModal__div">
               <form action="">
                  <h5 className="eventRegModal__div__tittle">Регистрация на мероприятие</h5>
                  <label htmlFor="name">Ваше имя:</label>
                  <input id='name' name='name' type="text" />
                  <label htmlFor="phone">Ваш телефон:</label>
                  <input id='phone' name='phone' type="tel" />
                  <Link className='eventRegModal__div__link' to="/">Войти или зарегистрироваться на сайте</Link>
                  <button>Оплатить</button>
               </form>
         </div>
      </div>
   );
};

export default EventRegModal;
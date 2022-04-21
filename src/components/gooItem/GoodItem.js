import React from 'react';
import humans from '../../images/goods/audience 1.png'
import time from '../../images/goods/Vector.png'
import { Link } from 'react-router-dom';
import './goodItem.css'
const GoodItem = ({good}) => {
   return (
      <div  className='good__item'>
         {
            good.discount?
            <div className="good__discount__percent">
               {good.percent}%
            </div>
            :null
         }
         <div className="good__item__img">
            <img src={good.img} alt="" />
         </div>
         <div className="good__item__info">
            <div className="humans__count">
               <img src={humans} alt="" />
               <div className="count">{good.hum}</div>
            </div>
            <div className="good__time">
               <img src={time} alt="" />
               <div className="time">{good.time}</div>
            </div>
            <div className="good__age">
               {good.age}
            </div>
         </div>
         <div className="good__name">
            {good.name}
         </div>
         <div className="good__prices">
               {
                   good.discount?
                   <div className="old__god__price">
                      <div className='secret'>{good.price * good.percent / 100} x 0</div>
                     <p>{good.price + good.price * good.percent / 100} ₽</p>
                   </div>
                   :null
               }
           
            <div className="good__price">
               <p>{good.price}  ₽</p>
            </div>
         </div>
         <div className="btns">
         <button className="r_bag">В корзину</button>
         <button className="r_buy">
            <Link className='r_buy_link' to={`/catalog/${good.id}`}>Купить в 1 клик</Link>
         </button>
         </div>

      </div>
   );
};

export default GoodItem;
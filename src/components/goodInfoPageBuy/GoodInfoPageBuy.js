import React from 'react';
import humans from '../../images/goods/audience 1.png'
import time from '../../images/goods/Vector.png'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './goodInfoPageBuy.css'
import close from '../../images/slider/down.png'
import open from '../../images/slider/up.png'
const GoodInfoPageBuy = ({good}) => {
   const src = (e) => {
    
 
   if(e.target.getAttribute("src") == close && !e.target.closest(".good__faq").classList.contains("good__faq__active")) {
      e.target.setAttribute("src", open)
      e.target.closest(".good__faq").classList.add("good__faq__active")
   } else {
      e.target.setAttribute("src", close)
      e.target.closest(".good__faq").classList.remove("good__faq__active")
   }
}
   return (
      <div className='good__buy'>
         <p className='good__code'>Код товара: {good.code}</p>
         <div className="good__buy__info">
            <div>
               <img className='good__buy__img' src={humans} alt="" />
               <div>{good.hum}</div>
            </div>
            <div>
               <img  className='good__buy__img' src={time} alt="" />
               <div>{good.time}</div>
            </div>
            <div>
               <div>age:</div>
               <div>{good.age}</div>
            </div>
         </div>
         <div className="good__buy__prices">
         
            <div className="good__buy__price">{good.price} ₽</div>
         </div>
         <button className="b_bag">В корзину</button>
         <button className="b_buy">Купить в 1 клик</button>
         <hr />
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
         
             <h5 className="good__faq__tittle">Доставка</h5>
  
        </AccordionSummary>
        <AccordionDetails>
      
          <ul className='good__faq__desc'>
               <li>Самовывоз из магазина: сегодня</li>
               <li>Самовывоз из 761 пункта: 1-3 дня</li>
               <li>Курьерская доставка: 1-3 дня</li>
               <li>Доставка почтой: от 3 дней</li>
             </ul>
       
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
         
             <h5 className="good__faq__tittle">Оплата</h5>
         
        </AccordionSummary>
        <AccordionDetails>
       
            <ul className='good__faq__desc'>
               <li>Самовывоз из магазина: сегодня</li>
               <li>Самовывоз из 761 пункта: 1-3 дня</li>
               <li>Курьерская доставка: 1-3 дня</li>
               <li>Доставка почтой: от 3 дней</li>
             </ul>
        
        </AccordionDetails>
      </Accordion>



         
         <input placeholder='Задать вопрос' type="text" className="my__answer" />
      </div>
   );
};

export default GoodInfoPageBuy;
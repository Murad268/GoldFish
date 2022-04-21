import React from 'react';
import { Link } from 'react-router-dom';
import './sliderItem.css'
const SliderItem = ({slider}) => {
   return (
      <div className='sliderItem'>
         <img src={slider.img}alt="" />
         <h4 className="sldierItem__subtittle">{slider.subTittle}</h4>
         <h5 className="sliderItem__tittle">{slider.tittle}</h5>
         <Link to = {`/${slider.for}`}>
            <button className="sliderItem__button">Подробнее</button>
         </Link>
      </div>
   );
};

export default SliderItem;
import React from 'react';
import './goodSliderImg.css'
const GoodSliderImg = ({good}) => {
  
   return (
      
         <div className="imgbox">
            <img src={good.img} alt="" />
         </div>
      
   );
};

export default GoodSliderImg;
import React from 'react';
import './goodPreview.css'
const GoodPreview = ({good, active, dots}) => {
   const className = good.id == active.slide? "goodPreview active__prew":"goodPreview"
   return (
      <div  className={className} >
         <img onClick={(e) => dots(e, good.id)} src={good.img} alt="" />
      </div>
   );
};

export default GoodPreview;
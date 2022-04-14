import React from 'react';
import './description.css'
const Description = ({good}) => {
   return (
      <div className='description'>
         {good.desc}
      </div>
   );
};

export default Description;
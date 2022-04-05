import React from 'react';
import './catalogItem.css'
const CatalogItem = ({catalog}) => {
   return (
      <div className='catalogItem'>
            <div className="catalogItem__img__block">
               <img src={catalog.img} alt="" />
            </div>
            <div className="catalogItem__desc">
                  {catalog.desc}
            </div>
      </div>
   );
};

export default CatalogItem;
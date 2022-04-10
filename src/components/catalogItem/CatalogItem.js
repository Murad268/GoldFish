import React from 'react';
import { Link } from 'react-router-dom';
import './catalogItem.css'
const CatalogItem = ({catalog}) => {
  
   return (
      <Link to={`/${catalog.for}`}  className='catalogItem'>
            <div className="catalogItem__img__block">
               <img src={catalog.img} alt="" />
            </div>
            <div className="catalogItem__desc">
                  {catalog.desc}
            </div>
      </Link>
   );
};

export default CatalogItem;
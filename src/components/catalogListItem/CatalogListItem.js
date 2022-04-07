import React from 'react';
import arrowDown from '../../images/list/Vector (1).png'
import './catalogListItem.css'
const CatalogListItem = ({list}) => {
   const listVisibility = (e) => {
      e.target.classList.toggle("listItem__active")
   }
   console.log(list.variants[2].goods)
   return (
      <li className='listItem' onClick={listVisibility}>
         {list.name}
        
         
        <ul>
         {
               list.variants.map(variant => {
                  return <li key={variant.id}>{variant.name}</li>
               })
            
            }
        </ul>
            <img onClick={listVisibility} src={arrowDown} alt="" />      
      </li>
   );
};

export default CatalogListItem;
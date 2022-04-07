import React from 'react';
import arrowDown from '../../images/list/Vector (1).png'
import arrowUp from '../../images/list/up.png'
import './catalogListItem.css'
const CatalogListItem = ({list}) => {
   const listVisibility = (e) => {
      e.target.closest("li").classList.toggle("listItem__active")
      e.target.classList.toggle("listBtn__active")
   }

   return (
      <li className='listItem' >
         {list.name}
       
         
        <ul className='listOfList'>
         {
               list.variants.map(variant => {
                  return <li onClick={variant.function} key={variant.id}>{variant.name}</li>
               })
            
         }
           
               <div onClick={listVisibility} className='listBtn'>
                  
                 
               </div>
          
        </ul>
                  
      </li>
   );
};

export default CatalogListItem;
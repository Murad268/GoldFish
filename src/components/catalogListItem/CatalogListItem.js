import React from 'react';
import './catalogListItem.css'
const CatalogListItem = ({list}) => {
   const listVisibility = (e) => {
      e.target.closest("li").classList.toggle("listItem__active")
      e.target.classList.toggle("listBtn__active")
   }
   const setActive = () => {
      document.querySelectorAll(".liItem").forEach(item => {
         item.addEventListener("click", (e) => {
         document.querySelectorAll(".liItem").forEach(item => {
            item.classList.remove("liItem__active")
         })
            e.target.classList.add("liItem__active")
         })
      })
   }
   setActive()
   return (
      <li  className='listItem' >
         <p onClick={list.function}>{list.name}</p>
        <ul className='listOfList'>
         {
               list.variants.map(variant => {
                  return <li className="liItem" onClick={variant.function} key={variant.id}>{variant.name}</li>
               })
         }
               <div onClick={listVisibility} className='listBtn'>                 
               </div>
          
        </ul>
                  
      </li>
   );
};

export default CatalogListItem;
import React, {useState, useEffect} from 'react';
import GoodItem from '../gooItem/GoodItem';
import Services from '../../services/Services'
import './goodCatalogListSlider.css'
import right from '../../images/goods/slider/Vector.png'
import left from '../../images/goods/slider/Vector (1).png'
const GoodCatalogListSlider = () => {
   const res = new Services()
   const [goods, setGoods] = useState([])
   const [offset, setOffset] = useState(0)
   useEffect(() => {
      res.getRes("http://localhost:3000", "goods").then(res => setGoods(res))
   }, [])
   const nextSlide = (e) => {
      const width = document.querySelector(".good__item").clientWidth
      if(offset >= (goods.length-1) * width) {
         setOffset(0)     
      } else {
         setOffset(prev => prev + width)

      }
   }
   const prevSlide = (e) => {
      const width = document.querySelector(".good__item").clientWidth
      if(offset <= 0) {
         setOffset((goods.length-1) * width)
    
      } else {
         setOffset(prev => prev - width)
      }
   }
   return (
      <>
          <div className='goodSlider'>
         <div className="over container">
            <h3 className="goodSlider__tittle">
               Успей купить
            </h3>
            <div className="goodSlider__wrapper">
               <div style={{transform: `translateX(-${offset}px)`}} className="goodSlider__inner">
                  {
                     goods.map(good => {
                        return <GoodItem good={good} key={good.id}/>
                     })
                  }
               </div>   
            </div> 
         </div>
         <div onClick={nextSlide} className="goodRight">
            <img src={right} alt="" />
         </div>
         <div onClick={prevSlide} className="goodLeft">
            <img src={left} alt="" />
         </div>


         
      </div>
      </>
   );
};

export default GoodCatalogListSlider;
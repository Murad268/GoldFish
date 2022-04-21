import React, {useState, useEffect} from 'react';
import { useSwipeable } from 'react-swipeable';
import './sliderItems.css'
import SliderItem from '../sliderItem/SliderItem';
import Services from '../../services/Services'
import right from '../../images/slider/Vector.png'
import left from '../../images/slider/VectorLeft.png'
import { db } from '../../db';
const SldierItems = () => {
   const [sliders, setSliders] = useState([])
   let [offset, setOffset] = useState(0)
   const res = new Services()
   useEffect(() => {
      // res.getRes("http://localhost:3000", "catagories").then(res=>setSliders(res))
      setSliders(db.catagories)
   }, [])
   
   const nextSlide = (e) => {
      const width = document.querySelector(".sliderItem").clientWidth
      if(offset >= (sliders.length-1) * width) {
         setOffset(0)
         
      } else {
         setOffset(prev => prev + width)

      }
   }
   const prevSlide = (e) => {
      const width = document.querySelector(".sliderItem").clientWidth
      if(offset <= 0) {
         setOffset((sliders.length-1) * width)
    
      } else {
         setOffset(prev => prev - width)
      }
   }
   const handler = useSwipeable({
      onSwipedLeft: (eventData) => nextSlide(),
      onSwipedRight: (eventData) => prevSlide(),
    });
   return (
      <div className='slider__wrapper'>
         <div {...handler} style={{transform: `translateX(-${offset}px)`}} className="slider__inner">
            {
               sliders.map(slider => {
                  return <SliderItem slider={slider} key={slider.id}/>
               })
            }
            
         </div>
         <div className='nextSlider' onClick={nextSlide}>
            <img src={right} alt="" />
         </div>
         <div onClick={prevSlide} className="prevSlider">
            <img src={left} alt="" />
         </div>
      </div>
   );
};

export default SldierItems;
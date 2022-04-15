import React, {useState, useEffect} from 'react';
import Services from '../../services/Services'
import GoodSliderImg from '../goodSliderImg/GoodSliderImg';
import GoodPreview from '../goodPreview/GoodPreview';
import GoodAnswers from '../goodAnswers/GoodAnswers';
import './goodInfoPage.css'
import right from '../../images/slider/right.png'
import left from '../../images/slider/left.png'
import up from '../../images/slider/up.png'
import down from '../../images/slider/down.png'
import GoodInfoPageBuy from '../goodInfoPageBuy/GoodInfoPageBuy';
const GoodInfoPage = () => {
   const res = new Services()
   const [goods, setGoods] = useState([])
   const [slider, setSlider] = useState({
      offset: 0,
      transform: 574
   })
   const [preview, setPrevies] = useState({
      offset: 0,
      transform: 105
   })
   const [active, setActive] = useState({
      slide: 1,
      prev: 0,
     
   })
  
   const cleanActive = () => {
      document.querySelectorAll(".goodPreview").forEach(item => {
         item.classList.remove("active__prew")
         
      })
   }
   const dots = (e, id) => {
      setActive(prev => ({...prev, slide: id}))
      cleanActive()
      e.target.parentNode.classList.add("active__prew")
      setSlider(prev => ( {...prev, offset: (id-1) * prev.transform}))
   }
   useEffect(() => {
      setPrevies(prev => ( {...prev, offset: active.prev * prev.transform}))
   }, [active.prev])
   const swipe = (e) => {
      if(e.target.classList.contains("right")) {
         cleanActive()
         if(slider.offset == slider.transform * (goods.images.length - 1)) {
            setActive(prev => ({...prev, prev: 0}))
            setPrevies(prev => ( {...prev, offset: 0}))
            setSlider(prev => ( {...prev, offset: 0}))
            setActive(prev => ({...prev, slide: 1}))
         } else {
            setActive(prev => ({...prev, prev: prev.prev + 1}))
         
            setSlider(prev => ( {...prev, offset: prev.offset + prev.transform}))
            setActive(prev => ({...prev, slide: prev.slide + 1}))
         }
      } else if(e.target.classList.contains("left")) {
         cleanActive()
         if(slider.offset == 0) {
            setActive(prev => ({...prev, prev: goods.images.length - 1}))
            setSlider(prev => ( {...prev, offset: prev.transform * (goods.images.length - 1)}))
            setActive(prev => ({...prev, slide: goods.images.length}))
         } else {
            if(active.prev == false) {
               setActive(prev => ({...prev, prev: goods.images.length - 2}))
            } else {
               setActive(prev => ({...prev, prev: prev.prev - 1}))
            }
           
           
            setSlider(prev => ( {...prev, offset: prev.offset - prev.transform}))
            setActive(prev => ({...prev, slide: prev.slide - 1}))
         }
      } else if(e.target.classList.contains("down")) {
         if(preview.offset == preview.transform * (goods.images.length - 1)) {
            setPrevies(prev => ( {...prev, offset: 0}))
         } else {
            setPrevies(prev => ( {...prev, offset: prev.offset + prev.transform}))
         }
      } else if(e.target.classList.contains("up")) {
         if(preview.offset <= 0) {
            setPrevies(prev => ( {...prev, offset: prev.transform * (goods.images.length - 1)}))
         } else {
            setPrevies(prev => ( {...prev, offset: prev.offset - prev.transform}))
         }
      }
   }

   useState(() => {
      res.getRes("http://localhost:3000", "goods/31").then(res => setGoods(res))
   }, [])

   return (
      <div className='goodInfoPage'>
        <div className="container">
         <h4>{goods.name}</h4>
         <div className="goodInfoPage__wrapper">
               <div>
                  <div className="slide__good__wrapper">
                     <img onClick={swipe} src={up} className="up" alt="" />
                     <img onClick={swipe} src={down} className="down" alt="" />
                     <div className="goodInfoSlider">
                           <div className="goodPreview__wrapper">
                     
                              <div style={{transform: `translateY(-${preview.offset}px)`}}  className="goodPreview__inner">
                              {
                                    goods.images?
                                    goods.images.map(good => {
                                       return <GoodPreview dots={dots} active={active}   good={good} key={good.id}/>
                                    })
                                    :null
                                 }
                              </div>
                           </div>
                           <div className="goodInfoPage__window">
                                 <div style={{transform: `translateX(-${slider.offset}px)`}} className="goodInfoPage__inner">
                                    {
                                       goods.images?
                                       goods.images.map(good => {
                                       return <GoodSliderImg good={good} key={good.id}/>
                                    })
                                    :null
                                    }
                                 </div>
                     
                              </div>
                     </div>
                     <img onClick={swipe} src={right} alt="" className="right" />
                     <img onClick={swipe} src={left} alt="" className="left" />
                  </div>
                  <GoodAnswers good={goods}/>
               </div>
               <div className='good__buy__box'>
                  <GoodInfoPageBuy good={goods}/>
               
               </div>
            </div>
        </div>
        
      </div>
   );
};

export default GoodInfoPage;
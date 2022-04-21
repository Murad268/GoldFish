import React, {useState, useEffect} from 'react';
import { useSwipeable } from 'react-swipeable';
import { useParams } from 'react-router-dom';
import {Helmet} from 'react-helmet'
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
import { db } from '../../db';
const GoodInfoPage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [])
   const {goodId} = useParams()
   const res = new Services()
   const [goods, setGoods] = useState([])
   const [slider, setSlider] = useState({
      offset: 0,
      transform: 574,
      offsetMini: 0,
      mini: 300,
     
   })
   const [preview, setPrevies] = useState({
      offset: 0,
      transform: 105,
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
      setActive(prev => ({...prev, slide: id, prev: id-1}))
      cleanActive()
      e.target.parentNode.classList.add("active__prew")
      setSlider(prev => ( {...prev, offset: (id-1) * prev.transform}))
   }
   useEffect(() => {
      setPrevies(prev => ( {...prev, offset: active.prev * prev.transform}))
   }, [active.prev])
   const swipe = (e) => {
      if(e.target.classList.contains("right") ||  e.target.classList.contains("miniRight")) {
         cleanActive()
         if(slider.offset == slider.transform * (goods.images.length - 1)) {
            setActive(prev => ({...prev, prev: 0}))
            setSlider(prev => ( {...prev, offsetMini: 0}))
            setPrevies(prev => ( {...prev, offset: 0}))
            setSlider(prev => ( {...prev, offset: 0}))
            setActive(prev => ({...prev, slide: 1}))
         } else {
            setActive(prev => ({...prev, prev: prev.prev + 1}))
            setSlider(prev => ( {...prev, offsetMini: prev.offsetMini + prev.mini}))
            setSlider(prev => ( {...prev, offset: prev.offset + prev.transform}))
            setActive(prev => ({...prev, slide: prev.slide + 1}))
         }
      } else if(e.target.classList.contains("left") || e.target.classList.contains("miniLeft")) {
         cleanActive()
         if(slider.offset == 0) {
            setActive(prev => ({...prev, prev: goods.images.length - 1}))
            setSlider(prev => ( {...prev, offsetMini: prev.mini * (goods.images.length - 1)}))
            setSlider(prev => ( {...prev, offset: prev.transform * (goods.images.length - 1)}))
            setActive(prev => ({...prev, slide: goods.images.length}))
         } else {
            setSlider(prev => ( {...prev, offsetMini: prev.offsetMini - prev.mini}))
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
      // res.getRes("http://localhost:3000", `goods/${goodId}`).then(res => setGoods(res))
      setGoods(db.goods[goodId-1])
   }, [])
   const handlerBig = useSwipeable({
      onSwipedLeft: (eventData) => document.querySelector(".right").click(),
      onSwipedRight: (eventData) => document.querySelector(".left").click(),
    });
   const handlerMini = useSwipeable({
      onSwipedLeft: (eventData) => document.querySelector(".miniRight").click(),
      onSwipedRight: (eventData) => document.querySelector(".miniLeft").click(),
    });
   return (
      <>
      <div className="application">
         <Helmet>
               <meta charSet="utf-8" />
               <title>{goods.name}</title>
         </Helmet>
      </div>
      <div className='goodInfoPage'>
        <div className="container">
        <h4>{goods.name}</h4>
      <div className="goodInfo__wrapper">
         <div className="good__buying">
               <div className="goodInfoPage__wrapper">
                  <div className="goodInfoPage__corusel">
                     <div className="good__preview">
                        <img onClick={swipe} src={up} className="up" alt="" />
                        <img onClick={swipe} src={down} className="down" alt="" />
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
                     </div>
                     <div className="good__slider">
                        <img onClick={swipe} src={right} alt="" className="miniRight" />
                        <img onClick={swipe} src={left} alt="" className="miniLeft" />
                        <div className="goodInfoPageMini__window">
                           <div {...handlerMini} style={{transform: `translateX(-${slider.offsetMini}px)`}} className="goodInfoPageMini__inner">
                              {
                                 goods.images?
                                 goods.images.map(good => {
                                 return <GoodSliderImg good={good} key={good.id}/>
                              })
                              :null
                              }
                           </div>
                        </div>
                        <div className="goodInfoPage__window">
                        <img onClick={swipe} src={right} alt="" className="right" />
                        <img onClick={swipe} src={left} alt="" className="left" />
                           <div {...handlerBig} style={{transform: `translateX(-${slider.offset}px)`}} className="goodInfoPage__inner">
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
                  </div>
                  <GoodInfoPageBuy good={goods}/>
               </div>
            </div>
            <div className="good__buy__footer">
                  <GoodAnswers good={goods}/>
            </div>
      </div>



        
        </div>
        
      </div>
   </>
      
   );
};

export default GoodInfoPage;
import React, {useState, useEffect} from 'react';
import Services from '../../services/Services';
import SpecialItem from '../specialGoodItem/SpecialGood';
import { useParams, Link } from 'react-router-dom';
import './oneNewsPage.css'
const OneNewsPage = () => {
   const {newsId} = useParams()
   const res = new Services()
   const [news, setNews] = useState({})
   const [specials, setSpecials] = useState([])
   let start = Math.floor(Math.random() * ((45-1)+1) + 1);
   let end = start + 5
  
   useEffect(() => {
      res.getRes("http://localhost:3000", `news/${newsId}`).then(res => setNews(res))
      res.getRes("http://localhost:3000", "goods").then(res => setSpecials(res))
   }, [])
   console.log(news)
   return (
      <div className='neNewsPage'>
        <div style={{marginTop: "29px", marginBottom: "20px"}} className='container'>
            <Link to="/"  style={{color:"black", textDecoration: "none", padding: "0 10px 0 0", fontWeight: 900}}>Главная</Link> 
            {">"}    
            <span style={{padding: "0 10px 0 10px", fontWeight: 300}}>{news.tittle}</span>
         </div>
         <div className="container">
            <div className="neNewsPage__bg">
               <div className="container">
               <img src={news.bigImg} alt="" />
               <h5>{news.tittle}</h5>
               <p>{news.desc}</p>
               <h5>Рекомендуем вам купить</h5>
               </div>
           
               <div className="newsPageGoods__wrapper">
               {
                  specials.map(special => {
                    
                     if(special.id > start && special.id < end) {
                        return <SpecialItem key={special.id} good={special}/>
                     }
                    
                  })
               }
            </div>
            </div>
         </div>
      </div>
   );
};

export default OneNewsPage;
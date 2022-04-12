import React from 'react';
import './newsItem.css'
import { Link } from 'react-router-dom';
import NewPage from '../../pages/NewsPage';
const NewsItem = ({oneNews}) => {
   return (
      <Link to={`/NewsPage/${oneNews.id}`} className='newsItem'>
         <div className="newsItem__img">
            <img src={oneNews.img} alt="" />
         </div>
         <div className="newsItem__footer">
            <div className="newsItem__footer__tittle">{oneNews.tittle}</div>
            <div className="newsItem__footer__desc">{
               oneNews.desc.length>35?oneNews.desc.slice(0, 35):oneNews.desc
            }</div>
         </div>
      </Link>
   );
};

export default NewsItem;
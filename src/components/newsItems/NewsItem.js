import React from 'react';
import './newsItem.css'
const NewsItem = ({oneNews}) => {
   return (
      <div className='newsItem'>
         <div className="newsItem__img">
            <img src={oneNews.img} alt="" />
         </div>
         <div className="newsItem__footer">
            <div className="newsItem__footer__tittle">{oneNews.tittle}</div>
            <div className="newsItem__footer__desc">{oneNews.desc}</div>
         </div>
      </div>
   );
};

export default NewsItem;
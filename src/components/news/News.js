import React, {useState, useEffect} from 'react';
import Services from '../../services/Services'
import NewsItem from '../newsItems/NewsItem';
import './news.css'
const News = () => {
   const [news, setNews] = useState([])
   const [loadedNews, setLoadedNews] = useState(3)
   const res = new Services()
   useEffect(() => {
      res.getRes("http://localhost:3000", "news").then(res => setNews(res))
   }, [])

   return (
      <div className='news'>
         <div className="container">
            <div className="news__tittle">Больше интересной информации</div>
            <div className="news__wrapper">
               {
                  news.map(oneNews => {
                     if(oneNews.id > loadedNews) {
                        return false
                     }
                     return <NewsItem key={oneNews.id} oneNews = {oneNews}/>
                  })
               }
            </div>
            <button onClick={() => setLoadedNews(prev => prev + 3)} className="news__load">
               Узнать больше
            </button>
         </div>
      </div>
   );
};

export default News;
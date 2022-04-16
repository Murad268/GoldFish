import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Services from '../../services/Services'
import CatalogItem from '../catalogItem/CatalogItem';
import { db } from '../../db';
import './catalog.css'
const Catalog = () => {
   const [cats, setCat] = useState([])
 
   const res = new Services()
   useEffect(() => {
      // res.getRes("http://localhost:3000", "preview").then(res => setCat(res))
      setCat(db.preview)
   }, [])
   return (
      <div className='catalog'>
            <div className="container">
               <h3 className="catalog__tittle">Каталог</h3>
            <div className="catalow__wrapper">
                       {
                          cats.map(cat => {
                             if(cat.id > 1 || cat.id == "all") {
                                return false
                             }
                             return <Link to={`/${cat.for}`} className="catalog__wrapper__big">
                                <div className="catalog__wrapper__big__imgBlock">
                                         <img src={cat.img} alt="" />
                                </div>
                                <div className="catalog__wrapper__big__desc">
                                      {cat.desc}
                                </div>
                             </Link>
                          })
                       }

                       <div className="catalog__links">
                           {
                              cats.map(cat => {
                                 if(cat.id > 1) {
                                    return <CatalogItem catalog={cat} key={cat.id}/>
                                 }
                               
                              })
                           }
                           <Link to={"/catalog"} className='catalogItem'>
                              <div className="catalogItem__img__block">
                                 <img src="https://scontent.fgyd4-3.fna.fbcdn.net/v/t39.30808-6/277814154_352583233476681_7850828748533065216_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=O1rchiIZpzQAX96ZWNk&_nc_ht=scontent.fgyd4-3.fna&oh=00_AT-frxjX7F1H5zzgatHKGfrPF8ZW8LSU9WRL20ThbKMwOw&oe=624EA4F1" alt="" />
                              </div>
                              <div className="catalogItem__desc">
                                    Весь каталог

                              </div>
                           </Link>
                       </div>
        </div>
            </div>
      </div>
   );
};

export default Catalog;
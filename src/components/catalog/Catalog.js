import React, {useState, useEffect} from 'react';
import Services from '../../services/Services'
import CatalogItem from '../catalogItem/CatalogItem';
import './catalog.css'
const Catalog = () => {
   const [cats, setCat] = useState([])
   const res = new Services()
   useEffect(() => {
      res.getRes("http://localhost:3000", "preview").then(res => setCat(res))
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
                             return <div className="catalog__wrapper__big">
                                <div className="catalog__wrapper__big__imgBlock">
                                         <img src={cat.img} alt="" />
                                </div>
                                <div className="catalog__wrapper__big__desc">
                                      {cat.desc}
                                </div>
                             </div>
                          })
                       }

                       <div className="catalog__links">
                           {
                              cats.map(cat => {
                                 if(cat.id > 1 || cat.id == "all") {
                                    return <CatalogItem catalog={cat} key={cat.id}/>
                                 }
                               
                              })
                           }
                       </div>
        </div>
            </div>
      </div>
   );
};

export default Catalog;
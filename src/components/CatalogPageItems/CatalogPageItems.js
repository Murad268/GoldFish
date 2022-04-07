import React, {useState, useEffect} from 'react';
import './catalogPageItems.css'
import Services from '../../services/Services'
import CatalogListItem from '../catalogListItem/CatalogListItem';
const CatalogPageItems = () => {
   const [lists, setLists] = useState([])
   const res = new Services()
   useEffect(() => {
      res.getRes(" http://localhost:3000", "goods").then(res => setLists(res))
   },[])
  
   
   return (
      <div className='catalogPageItems'>
        <div className="container">
         <div className="catalogPageItems__wrapper">
              <div className="catalog__filter">
               <ul className="catalogPage__list">
                     {
                        lists.map(list => {
                           return <CatalogListItem list={list} key={list.id}/>
                        })
                     }
                  </ul>
                  <hr />
                  <form action="" className="list__form">
                     <div className="list__form__priteTittle">
                        <h5>Цена</h5> <img src="" alt="" />
                     </div>
                     <label htmlFor="from">От</label>
                     <input placeholder='0' id='from' type="text" />
                     <label htmlFor="to">До</label>
                     <input placeholder='22780' id='to' type="text" />
                     <div className="range">
                        <input type="range" />
                     </div>
                     <div>
                        <input type="checkbox"/>
                        <span>Только со скидкой</span>
                     </div>
                     <hr />
                     <div className="list__form__ageTittle">
                        <h5>Возрасты</h5>
                        <img src="" alt="" />
                     </div>
                     <div>
                        <input type="checkbox" name="" id="" />
                        <span>3-5 лет</span>
                     </div>
                     <div>
                        <input type="checkbox" name="" id="" />
                        <span>6-7 лет</span>
                     </div>
                     <div>
                        <input type="checkbox" name="" id="" />
                        <span>8-12 лет</span>
                     </div>
                     <div>
                        <input type="checkbox" name="" id="" />
                        <span>13-15 лет</span>
                     </div>
                     <div>
                        <input type="checkbox" name="" id="" />
                        <span>16-17 лет</span>
                     </div>
                     <div>
                        <input type="checkbox" name="" id="" />
                        <span>более 18 лет</span>
                     </div>
                     <div className="list__form__availabilityTittle">
                        <h5>Наличие</h5>
                        <img src="" alt="" />
                     </div>
                     <div>
                        <input type="checkbox"/>
                        <spanp>в наличии</spanp>
                     </div>
                     <div>
                        <input type="checkbox"/>
                        <span>под заказ</span>
                     </div>
                     <div>
                        <input type="checkbox"/>
                        <span>нет в наличии</span>
                     </div>
                     <div className="list__form__countTittle">
                        <h5>Количество игроков</h5>
                        <img src="" alt="" />
                     </div>
                     <input id='humanCount__range' type="range" />
                     <div className='humanCount'>
                        <div>Любое</div>
                        <div>1  2  3  4  5  6</div>
                        <div>Больше</div>   
                     </div>
                     <button type='reset'>Сбросить фильтр</button>
                  </form>
              </div>
            </div>
            <div className="goods">
            
            </div>
        </div>
      </div>
   );
};

export default CatalogPageItems;
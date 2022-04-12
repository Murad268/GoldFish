import React, {useState, useEffect} from 'react';
import './catalogPageItems.css'
import Services from '../../services/Services'
import CatalogListItem from '../catalogListItem/CatalogListItem';
import GoodItem from '../gooItem/GoodItem';
const CatalogPageItems = ({lists, goodNem, setGoodName, filterPost, setActive, onFilter, filters, setFilters, availability, discount, interval}) => {
   const res = new Services()
   const [goods, setGoods] = useState([])
   const filteredItems = interval(discount(availability(onFilter(filterPost(goods, goodNem), filters), filters) , filters), filters) 
   useEffect(() => {
      res.getRes("http://localhost:3000", "goods").then(res => {
          setGoods(res)
      })
   },[goodNem])
   const listVisibility = (e) => {
    document.querySelector(".all_acategory").classList.toggle("listItem__active")
    e.target.classList.toggle("listBtn__active")
  }
   return (
      <div className='catalogPageItems'>
        <div className="container">
         <div className="catalogPageItems__wrapper">
              <div className="catalog__filter">
               <ul className="all_acategory listItem__active">
               <p onClick={() => setGoodName("all")}>Все категории</p>
                  <li>
                    <ul className="catalogPage__list">
                      {
                          lists.map(list => {
                              return <CatalogListItem setActive={setActive} list={list} key={list.id}/> 
                          })
                      }
                      <div onClick={listVisibility} className='listBtn'></div>
                    </ul>
                  </li>
               </ul>
                  <hr />
                  <form action="" className="list__form">
                     <div className="list__form__priteTittle">
                        <h5>Цена</h5> <img src="" alt="" />
                     </div>
                     <label  htmlFor="from">От</label>
                     <input value={filters.from} onChange={(e) => setFilters(prev => ({...prev, from: e.target.value}))}   id='from' type="text" />
                     <label htmlFor="to">До</label>
                     <input value={filters.to}  onChange={(e) => setFilters(prev => ({...prev, to: e.target.value}))}  id='to' type="text" />
                     <div className="range">
                        <input onChange={(e) => setFilters(prev => ({...prev, from: e.target.value}))} type="range" className="form-range" defaultValue= "0" min="0" max="30000" step="100" id="customRange3"/>
                        <input onChange={(e) => setFilters(prev => ({...prev, to: e.target.value}))} type="range" className="form-range" defaultValue= "30000" min="0" max="30000" step="100" id="customRange3"/>
                     </div>
                     <div>
                        <input onChange={() => setFilters(prev => ({...prev, discount: !prev.discount}))} type="checkbox"/>
                        <span>Только со скидкой</span>
                     </div>
                     <hr />
                     <div className="list__form__ageTittle">
                        <h5>Возрасты</h5>
                        <img src="" alt="" />
                     </div>
                     <div>
                        <input onChange={(e) => setFilters(prev => ({...prev, year: e.target.value}))} name='age'  value="all" type="radio"  id="" />
                        <span>все категории</span>
                     </div>
                     <div>
                        <input onChange={(e) => setFilters(prev => ({...prev, year: e.target.value}))} name='age'  value="3-5" type="radio"  id="" />
                        <span>3-5 лет</span>
                     </div>
                     <div>
                        <input onChange={(e) => setFilters(prev => ({...prev, year: e.target.value}))} name='age' value="6-7" type="radio"  id="" />
                        <span>6-7 лет</span>
                     </div>
                     <div>
                        <input onChange={(e) => setFilters(prev => ({...prev, year: e.target.value}))} name='age' value="8-12" type="radio"  id="" />
                        <span>8-12 лет</span>
                     </div>
                     <div>
                        <input onChange={(e) => setFilters(prev => ({...prev, year: e.target.value}))} name='age'  value="13-15" type="radio"  id="" />
                        <span>13-15 лет</span>
                     </div>
                     <div>
                        <input onChange={(e) => setFilters(prev => ({...prev, year: e.target.value}))} name='age' value="16-17" type="radio"  id="" />
                        <span>16-17 лет</span>
                     </div>
                     <div>
                        <input onChange={(e) => setFilters(prev => ({...prev, year: e.target.value}))} name='age'  value="18+" type="radio"  id="" />
                        <span>более 18 лет</span>
                     </div>
                     <div className="list__form__availabilityTittle">
                        <h5>Наличие</h5>
                        <img src="" alt="" />
                     </div>
                     <div>
                        <input onChange={(e) => setFilters(prev => ({...prev, availability: e.target.value}))} name='availability' value="all" type="radio"/>
                        <spanp>все товары</spanp>
                     </div>
                     <div>
                        <input onChange={(e) => setFilters(prev => ({...prev, availability: e.target.value}))} name='availability' value="instock" type="radio"/>
                        <spanp>в наличии</spanp>
                     </div>
                     <div>
                        <input onChange={(e) => setFilters(prev => ({...prev, availability: e.target.value}))} name='availability' value="onorder" type="radio"/>
                        <span>под заказ</span>
                     </div>
                     <div>
                        <input onChange={(e) => setFilters(prev => ({...prev, availability: e.target.value}))} name='availability' value="notavailable" type="radio"/>
                        <span>нет в наличии</span>
                     </div>
                     <button type='reset'>Сбросить фильтр</button>
                  </form>
              </div>
              <div className="goods">
                  <div className="goods__wrapper">
                        {
                           filteredItems.map(good => {
                             
                                 return <GoodItem key={good.id} good={good}/>
                              
                           
                         })
                     }
                  </div>
                 
            </div>
            </div>
        </div>
      </div>
   );
};

export default CatalogPageItems;
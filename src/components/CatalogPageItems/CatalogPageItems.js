import React, {useState, useEffect} from 'react';
import './catalogPageItems.css'
import Services from '../../services/Services'
import CatalogListItem from '../catalogListItem/CatalogListItem';
import GoodItem from '../gooItem/GoodItem';
import { v4 as uuidv4 } from 'uuid';
import arrowDown from '../../images/list/Vector (1).png'
const CatalogPageItems = () => {
  const res = new Services()
   const [lists, setLists] = useState([
      {
         "id": 1,
         "name": "Настольные игры",
         "for": "boardGame",
         "variants": [
           {
             "id": 1,
             "name": "Вечериночные игры",
             "function": () => setGoodName("pary")
           },
           {
             "id": 2,
             "name": "Детективные игры",
             "function": () => setGoodName("dedective")
           },
           { 
             "id": 3,
             "name": "Детские игры",
             "function": () => setGoodName("child")
           },
           {
             "id": 4,
             "name": "Дуэльные игры",
             "function": () => setGoodName("duel")
           },
           {
             "id": 5,
             "name": "Карточные игры",
             "function": () => setGoodName("cards")
           },
           {
             "id": 6,
             "name": "Классические игры",
             "function": () => setGoodName("classic")
           },
           {
             "id": 7,
             "name": "Книги-игры",
             "function": () => setGoodName("book")
           },
           {
             "id": 8,
             "name": "Кооперативные игры",
             "function": () => setGoodName("coop")
           },
           {
             "id": 9,
             "name": "Наборы игр",
             "function": () => setGoodName("kit")
             
           },
           {
             "id": 10,
             "name": "Приключенческие игры",
             "function": () => setGoodName("adventure")
           },
           {
             "id": 11,
             "name": "Семейные игры",
             "function": () => setGoodName("family")
           },
           {
             "id": 12,
             "name": "Стратегические игры",
             "function": () => setGoodName("strategy")
           },
           {
             "id": 13,
             "name": "Хардкорные игры",
             "function": () => setGoodName("hardcore")
           },
           {
             "id": 14,
             "name": "Экономические игры",
             "function": () => setGoodName("economic")
           }
         ]
        
       },
       {
         "id": 2,
         "name": "Warhammer 40000",
         "for": "wh",
         "variants": [
           {
             "id": 1,
             "name": "Альтернативные миниатюры",
             "function": () => setGoodName("alternative")
           },
           {
             "id": 2,
             "name": "Warhammer",
             "function": () => setGoodName("war")
           },
           { 
             "id": 3,
             "name": "Age of Sigmar",
             "function": () => setGoodName("ageSg")
           },
           {
             "id": 4,
             "name": "Warcry",
             "function": () => setGoodName("warcry")
           },
           {
             "id": 5,
             "name": "Nercomunda",
             "function": () => setGoodName("nercomunda")
           },
           {
             "id": 6,
             "name": "Lord of the Rings",
             "function": () => setGoodName("lor")
           },
           {
             "id": 9,
             "name": "Blood Bowl",
             "function": () => setGoodName("blood")
           },
           {
             "id": 10,
             "name": "Titanicus",
             "function": () => setGoodName("titanicus")
           },
           {
             "id": 11,
             "name": "Killtem",
             "function": () => setGoodName("killtem")
           }
         ]
       },
       {
         "id": 3,
         "name": "Magic: the Gathering",
         "for": "gt",
         "variants": [
           {
             "id": 1,
             "name": "Иннистрад: Полночна Охота",
             "function": () => setGoodName("midnightHunt")
           },
           {
             "id": 2,
             "name": "Приключения в Забытых Королевствах",
             "function": () => setGoodName("adventuresInTheForgottenRealms")
           }, 
           {
             "id": 3,
             "name": "Иннистрад: Багровая Клятва",
             "function": () => setGoodName("crimsonOath")
           },
           {
             "id": 4,
             "name": "Выбор Равники",
             "function": () => setGoodName("choiceOfRavnica")
           }, 
           {
             "id": 5,
             "name": "Гильдии Равники",
             "function": () => setGoodName("guildsOfRavnica")
           },
           {
             "id": 6,
             "name": "Война искры",
             "function": () => setGoodName("warOfTheSpark")
           },
           {
             "id": 7,
             "name": "Базовый выпуск 2021",
             "function": () => setGoodName("coreSet2021")
           },
           {
             "id": 8,
             "name": "Престол Элдраина",
             "function": () => setGoodName("throneOfEldraine")
           },
           {
             "id": 9,
             "name": "Терос: За Порогом Смерти",
             "function": () => setGoodName("beyondTheThresholdOfDeath")
           },
           {
             "id": 10,
             "name": "Икория. Логово исполинов",
             "function": () => setGoodName("lairOfTheGiants")
           }
         ]
       },
       {
         "id": 4,
         "name": "Аксессуры для игр",
         "for": "acc",
         "variants": [
           {
             "id": 1,
             "name": "Протекторы",
             "function": () => setGoodName("protectors")
           },
           {
             "id": 2,
             "name": "Альбомы",
             "function": () => setGoodName("albums")
           }, 
           {
             "id": 3,
             "name": "Коробочки",
             "function": () => setGoodName("boxes")
           },
           {
             "id": 4,
             "name": "Кубики",
             "function": () => setGoodName("cubes")
           },
           {
             "id": 5,
             "name": "Коврики",
             "function": () => setGoodName("rugs")
           },
           {
             "id": 6,
             "name": "Мешочки",
             "function": () => setGoodName("pouches")
           },
           {
             "id": 7,
             "name": "Case",
             "function": () => setGoodName("case")
           }
         ]
       },
       {
         "id": 5,
         "name": "Краски",
         "for": "color",
         "variants": [
           {
             "id": 1,
             "name": "Citadel",
             "function": () => setGoodName("colors")
           },
           {
             "id": 2,
             "name": "Bosny",
             "function": () => setGoodName("bosny")
           },
           {
             "id": 3,
             "name": "Vallejo",
             "function": () => setGoodName("vallejo")
           }
         ]
        
       },
       {
         "id": 6,
         "name": "Аксессуары для моделизма",
         "for": "accmd",
         "variants": [
           {
             "id": 1,
             "name": "Кисти",
             "function": () => setGoodName("brushes")
           },
           {
           },
           {
             "id": 3,
             "name": "Инструменты",
             "function": () => setGoodName("instruments")
           },
           {
             "id": 4,
             "name": "Декорации",
             "function": () => setGoodName("decorations")
           },
           {
             "id": 5,
             "name": "Подставки",
             "function": () => setGoodName("coasters")
           }
         ]
        
       }
   ])
   const [goods, setGoods] = useState([])
   const [goodNem, setGoodName] = useState("pary")
  

  
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
               Все категории
                  <li>
                    <ul className="catalogPage__list">
                      {
                          lists.map(list => {
                         
                              return <CatalogListItem list={list} key={list.id}/>
                            
                            
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
              <div className="goods">
                  <div className="goods__wrapper">
                     {
                        goods.map(good => {
                          if(good.for != goodNem) {
                            return false
                          }
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
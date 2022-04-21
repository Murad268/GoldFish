import React, {useState} from 'react';
import CatalogPageItems from '../components/CatalogPageItems/CatalogPageItems';
import {Helmet} from 'react-helmet'
import { useParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import filter from '../images/filter/Без названия.png'
const CatalogPage = () => {
   const {forIt} =  useParams()
   const [menu, setMenu] = useState(false)
   const [goodNem = "all", setGoodName] = useState(forIt)
   const [mainLink, setMainLink] = useState("")
   const [subLink, setSublink] = useState("")
   const [filters, setFilters] = useState({
     year: "all",
     availability: "all",
     from: "0",
     to: "50000",
     discount: false
   })
   const filterPost = (items, filter) => {
     if(filter == "pary") {
       
     }
      switch(filter) {
        case "pary":
          setMainLink("Настольные игры")
          setSublink("Вечериночные игры")
          return items.filter(item => item.for == "pary")
        case "dedective":
          setMainLink("Настольные игры")
          setSublink("Детективные игры")
          return items.filter(item => item.for == "dedective");
        case "child":
          setMainLink("Настольные игры")
          setSublink("Детские игры")
          return items.filter(item => item.for == "child");
        case "duel":
          setMainLink("Настольные игры")
          setSublink("Дуэльные игры")
          return items.filter(item => item.for == "duel");
        case "cards":
          setMainLink("Настольные игры")
          setSublink("Карточные игры")
          return items.filter(item => item.for == "cards");
        case "classic":
          setMainLink("Настольные игры")
          setSublink("Классические игры")
          return items.filter(item => item.for == "classic");
        case "book":
          setMainLink("Настольные игры")
          setSublink("Книги-игры")
          return items.filter(item => item.for == "book");
          case "coop":
          setMainLink("Настольные игры")
          setSublink("Кооперативные игры")
          return items.filter(item => item.for == "coop");
        case "kit":
          setMainLink("Настольные игры")
          setSublink("Наборы игр")
          return items.filter(item => item.for == "kit");
        case "adventure":
          setMainLink("Настольные игры")
          setSublink("Приключенческие игры")
          return items.filter(item => item.for == "adventure");
        case "family":
          setMainLink("Настольные игры")
          setSublink("Семейные игры")
          return items.filter(item => item.for == "family");
        case "strategy":
          setMainLink("Настольные игры")
          setSublink("Стратегические игры")
          return items.filter(item => item.for == "strategy");
        case "hardcore":
          setMainLink("Настольные игры")
          setSublink("Хардкорные игры")
          return items.filter(item => item.for == "hardcore");
        case "economic":
          setMainLink("Настольные игры")
          setSublink("Экономические игры")
          return items.filter(item => item.for == "economic");
        case "alternative":
          setMainLink("Warhammer 40000")
          setSublink("Альтернативные миниатюры")
          return items.filter(item => item.for == "alternative");
        case "war":
          setMainLink("Warhammer 40000")
          setSublink("Warhammer")
          return items.filter(item => item.for == "war");
        case "ageSg":
          setMainLink("Warhammer 40000")
          setSublink("Age of Sigmar")
          return items.filter(item => item.for == "ageSg");
        case "warcry":
          setMainLink("Warhammer 40000")
          setSublink("Warcry")
          return items.filter(item => item.for == "warcry");
        case "nercomunda":
          setMainLink("Warhammer 40000")
          setSublink("Nercomunda")
          return items.filter(item => item.for == "nercomunda");
        case "lor":
          setMainLink("Warhammer 40000")
          setSublink("Lord of the Rings")
          return items.filter(item => item.for == "lor");
        case "blood":
          setMainLink("Warhammer 40000")
          setSublink("Blood Bowl")
          return items.filter(item => item.for == "blood");
        case "titanicus":
          setMainLink("Warhammer 40000")
          setSublink("Titanicus")
          return items.filter(item => item.for == "titanicus");
        case "killtem":
          setMainLink("Warhammer 40000")
          setSublink("Killtem")
          return items.filter(item => item.for == "killtem");
        case "midnightHunt":
          setMainLink("Magic: the Gathering")
          setSublink("Иннистрад: Полночна Охота")
          return items.filter(item => item.for == "midnightHunt");
        case "adventuresInTheForgottenRealms":
          setMainLink("Magic: the Gathering")
          setSublink("Приключения в Забытых Королевствах")
          return items.filter(item => item.for == "adventuresInTheForgottenRealms");
        case "crimsonOath":
          setMainLink("Magic: the Gathering")
          setSublink("Иннистрад: Багровая Клятва")
          return items.filter(item => item.for == "crimsonOath");
        case "choiceOfRavnica":
          setMainLink("Magic: the Gathering")
          setSublink("Выбор Равники")
          return items.filter(item => item.for == "choiceOfRavnica");
        case "guildsOfRavnica":
          setMainLink("Magic: the Gathering")
          setSublink("Гильдии Равники")
          return items.filter(item => item.for == "guildsOfRavnica");
        case "warOfTheSpark":
          setMainLink("Magic: the Gathering")
          setSublink("Война искры")
          return items.filter(item => item.for == "warOfTheSpark");
        case "coreSet2021":
          setMainLink("Magic: the Gathering")
          setSublink("Базовый выпуск 2021")
          return items.filter(item => item.for == "coreSet2021");
        case "throneOfEldraine":
          setMainLink("Magic: the Gathering")
          setSublink("Престол Элдраина")
          return items.filter(item => item.for == "throneOfEldraine")
        case "beyondTheThresholdOfDeath":
          setMainLink("Magic: the Gathering")
          setSublink("Терос: За Порогом Смерти")
          return items.filter(item => item.for == "beyondTheThresholdOfDeath");
        case "lairOfTheGiants":
          setMainLink("Magic: the Gathering")
          setSublink("Икория. Логово исполинов")
          return items.filter(item => item.for == "lairOfTheGiants");
        case "protectors":
          setMainLink("Аксессуры для игр")
          setSublink("Протекторы")
          return items.filter(item => item.for == "protectors");
        case "albums":
          setMainLink("Аксессуры для игр")
          setSublink("Альбомы")
          return items.filter(item => item.for == "albums")
        case "boxes":
          setMainLink("Аксессуры для игр")
          setSublink("Коробочки")
          return items.filter(item => item.for == "boxes");
        case "cubes":
          setMainLink("Аксессуры для игр")
          setSublink("Кубики")
          return items.filter(item => item.for == "cubes");
        case "rugs":
          setMainLink("Аксессуры для игр")
          setSublink("Коврики")
          return items.filter(item => item.for == "rugs");
        case "pouches":
          setMainLink("Аксессуры для игр")
          setSublink("Мешочки")
          return items.filter(item => item.for == "pouches")
        case "case":
          setMainLink("Аксессуры для игр")
          setSublink("Case")
          return items.filter(item => item.for == "case");
        case "colors":
          setMainLink("Краски")
          setSublink("Citadel")
          return items.filter(item => item.for == "colors");
        case "bosny":
          setMainLink("Краски")
          setSublink("Bosny")
          return items.filter(item => item.for == "bosny");
        case "vallejo":
          setMainLink("Краски")
          setSublink("Vallejo")
          return items.filter(item => item.for == "pouches")
        case "brushes":
          setMainLink("Аксессуары для моделизма")
          setSublink("Кисти")
          return items.filter(item => item.for == "brushes");
        case "instruments":
          setMainLink("Аксессуары для моделизма")
          setSublink("Инструменты")
          return items.filter(item => item.for == "instruments");
        case "decorations":
          setMainLink("Аксессуары для моделизма")
          setSublink("Декорации")
          return items.filter(item => item.for == "decorations");
        case "coasters":
          setMainLink("Аксессуары для моделизма")
          setSublink("Подставки")
          return items.filter(item => item.for == "coasters")
        case "board":
          setMainLink("Настольные игры")
          setSublink("")
          return items.filter(item => item.allFor == "board")
        case "magic":
          setMainLink("Magic: the Gathering")
          setSublink("")
          return items.filter(item => item.allFor == "magic")
        case "warhammer":
          setMainLink("Warhammer 40000")
          setSublink("")
          return items.filter(item => item.allFor == "warhammer")
        case "color":
          setMainLink("Краски")
          setSublink("")
          return items.filter(item => item.allFor == "color")
        case "acc":
          setMainLink("Аксессуры для игр")
          setSublink("")
          return items.filter(item => item.allFor == "acc")
        case "model":
          setMainLink("Аксессуары для моделизма")
          setSublink("")
          return items.filter(item => item.allFor == "model")
        case "all":
          return items.filter(item => item.name)
        

      }
   }
   const [lists, setLists] = useState([
      {
         "id": 1,
         "name": "Настольные игры",
         "for": "boardGame",
         "function":() => setGoodName("board"),
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
         "function": () => setGoodName("warhammer"),
         "variants": [
           {
             "id": 15,
             "name": "Альтернативные миниатюры",
             "function": () => setGoodName("alternative")
           },
           {
             "id": 16,
             "name": "Warhammer",
             "function": () => setGoodName("war")
           },
           { 
             "id": 17,
             "name": "Age of Sigmar",
             "function": () => setGoodName("ageSg")
           },
           {
             "id": 18,
             "name": "Warcry",
             "function": () => setGoodName("warcry")
           },
           {
             "id": 19,
             "name": "Nercomunda",
             "function": () => setGoodName("nercomunda")
           },
           {
             "id": 20,
             "name": "Lord of the Rings",
             "function": () => setGoodName("lor")
           },
           {
             "id": 21,
             "name": "Blood Bowl",
             "function": () => setGoodName("blood")
           },
           {
             "id": 22,
             "name": "Titanicus",
             "function": () => setGoodName("titanicus")
           },
           {
             "id": 23,
             "name": "Killtem",
             "function": () => setGoodName("killtem")
           }
         ]
       },
       {
         "id": 24,
         "name": "Magic: the Gathering",
         "for": "gt",
         "function": () => setGoodName("magic"),
         "variants": [
           {
             "id": 25,
             "name": "Иннистрад: Полночна Охота",
             "function": () => setGoodName("midnightHunt")
           },
           {
             "id": 26,
             "name": "Приключения в Забытых Королевствах",
             "function": () => setGoodName("adventuresInTheForgottenRealms")
           }, 
           {
             "id": 27,
             "name": "Иннистрад: Багровая Клятва",
             "function": () => setGoodName("crimsonOath")
           },
           {
             "id": 28,
             "name": "Выбор Равники",
             "function": () => setGoodName("choiceOfRavnica")
           }, 
           {
             "id": 29,
             "name": "Гильдии Равники",
             "function": () => setGoodName("guildsOfRavnica")
           },
           {
             "id": 30,
             "name": "Война искры",
             "function": () => setGoodName("warOfTheSpark")
           },
           {
             "id": 31,
             "name": "Базовый выпуск 2021",
             "function": () => setGoodName("coreSet2021")
           },
           {
             "id": 32,
             "name": "Престол Элдраина",
             "function": () => setGoodName("throneOfEldraine")
           },
           {
             "id": 33,
             "name": "Терос: За Порогом Смерти",
             "function": () => setGoodName("beyondTheThresholdOfDeath")
           },
           {
             "id": 34,
             "name": "Икория. Логово исполинов",
             "function": () => setGoodName("lairOfTheGiants")
           }
         ]
       },
       {
         "id": 4,
         "name": "Аксессуры для игр",
         "for": "acc",
         "function": () => setGoodName("acc"),
         "variants": [
           {
             "id": 35,
             "name": "Протекторы",
             "function": () => setGoodName("protectors")
           },
           {
             "id": 36,
             "name": "Альбомы",
             "function": () => setGoodName("albums")
           }, 
           {
             "id": 37,
             "name": "Коробочки",
             "function": () => setGoodName("boxes")
           },
           {
             "id": 38,
             "name": "Кубики",
             "function": () => setGoodName("cubes")
           },
           {
             "id": 39,
             "name": "Коврики",
             "function": () => setGoodName("rugs")
           },
           {
             "id": 40,
             "name": "Мешочки",
             "function": () => setGoodName("pouches")
           },
           {
             "id": 41,
             "name": "Case",
             "function": () => setGoodName("case")
           }
         ]
       },
       {
         "id": 5,
         "name": "Краски",
         "for": "color",
         "function": () => setGoodName("color"),
         "variants": [
           {
             "id": 42,
             "name": "Citadel",
             "function": () => setGoodName("colors")
           },
           {
             "id": 43,
             "name": "Bosny",
             "function": () => setGoodName("bosny")
           },
           {
             "id": 44,
             "name": "Vallejo",
             "function": () => setGoodName("vallejo")
           }
         ]
        
       },
       {
         "id": 6,
         "name": "Аксессуары для моделизма",
         "for": "accmd",
         "function": () => setGoodName("model"),
         "variants": [
           {
             "id": 45,
             "name": "Кисти",
             "function": () => setGoodName("brushes")
           },
           {
             "id": 46,
             "name": "Инструменты",
             "function": () => setGoodName("instruments")
           },
           {
             "id": 47,
             "name": "Декорации",
             "function": () => setGoodName("decorations")
            
           },
           {
             "id": 48,
             "name": "Подставки",
             "function": () => setGoodName("coasters")
           
           }
         ]
        
       }
   ])
   const onFilter = (items, filtering) => {
     switch(filtering.year) {
      case "all":
          return items
      case "3-5":
        return items.filter(item => item.age == "3-5")
      case "6-7":
        return items.filter(item => item.age == "6-7")
      case "8-12":
        return items.filter(item => item.age == "8-12")
      case "13-15":
        return items.filter(item => item.age == "13-15")
      case "16-17":
        return items.filter(item => item.age == "16-17")
      case "18+":
        return items.filter(item => item.age == "18+")
     }
   }
   const availability = (items, filter) => {
      switch(filter.availability) {
        case "all":
          return items
        case "instock":
          return items.filter(item => item.availability == "instock")
        case "onorder":
          return items.filter(item => item.availability == "onorder")
        case "notavailable":
          return items.filter(item => item.availability == "notavailable")
      }
   }
   const discount = (items, filter) => {
     switch(filter.discount) {
       case false:
         return items
       case true:
        return items.filter(item => item.discount)

     }
   }
   const interval = (items, filter) => {
      switch(filter.from) {
        case filter.from:
          return items.filter(item => item.price > filter.from && item.price < filter.to)
      }
   }
   const filterMenu = () => {
    setMenu(prev => !prev)
   }
  
   return (
      <>      
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Catalog</title>
            </Helmet>
        </div>                    
         <div style={{marginTop: "29px", marginBottom: "9px"}} className='container'>
         <Link to="/"  style={{color:"black", textDecoration: "none", padding: "0 10px 0 0", fontWeight: 900}}>Главная</Link>    
           {
             mainLink?
             ">"
             :null
           }
           <span onClick={() => {
             setGoodName("board")
             setSublink("")
           }} style={{cursor: "pointer", padding: "0 10px 0 10px", fontWeight: 600}}>{mainLink} </span>
           {
             subLink?
             ">"
             :null
           }
           <span style={{padding: "0 0 0 10px", fontWeight: 300 }}>{subLink}</span>
           <div onClick={filterMenu} className='filter__menu'><img src={filter} alt="" /></div>
           </div>
         <CatalogPageItems   menu={menu} interval = {interval} discount={discount} availability = {availability} setFilters={setFilters} filters={filters} onFilter={onFilter}  filterPost={filterPost} setGoodName={setGoodName}  goodNem={goodNem} lists={lists}/>
      </>
   );
};

export default CatalogPage;
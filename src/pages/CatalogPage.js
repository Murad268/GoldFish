import React, {useState} from 'react';
import CatalogPageItems from '../components/CatalogPageItems/CatalogPageItems';
import { useParams } from 'react-router-dom';
const CatalogPage = () => {
  const {forIt} =  useParams()
  
   const [goodNem = "all", setGoodName] = useState(forIt)
   const [filters, setFilters] = useState({
     year: "all",
     availability: "all",
     from: "0",
     to: "30000",
     discount: false
   })
   console.log(filters.availability)
   const filterPost = (items, filter) => {
      switch(filter) {
        case "pary":
          return items.filter(item => item.for == "pary");
        case "dedective":
          return items.filter(item => item.for == "dedective");
        case "child":
          return items.filter(item => item.for == "child");
        case "duel":
          return items.filter(item => item.for == "duel");
        case "cards":
          return items.filter(item => item.for == "cards");
        case "dedective":
          return items.filter(item => item.for == "dedective");
        case "classic":
          return items.filter(item => item.for == "classic");
        case "book":
          return items.filter(item => item.for == "book");
          case "coop":
          return items.filter(item => item.for == "coop");
        case "kit":
          return items.filter(item => item.for == "kit");
        case "adventure":
          return items.filter(item => item.for == "adventure");
        case "family":
          return items.filter(item => item.for == "family");
        case "adventure":
          return items.filter(item => item.for == "adventure");
        case "family":
          return items.filter(item => item.for == "family");
        case "strategy":
          return items.filter(item => item.for == "strategy");
        case "hardcore":
          return items.filter(item => item.for == "hardcore");
        case "economic":
          return items.filter(item => item.for == "economic");
        case "alternative":
          return items.filter(item => item.for == "alternative");
        case "war":
          return items.filter(item => item.for == "war");
        case "ageSg":
          return items.filter(item => item.for == "ageSg");
        case "warcry":
          return items.filter(item => item.for == "warcry");
        case "nercomunda":
          return items.filter(item => item.for == "nercomunda");
        case "lor":
          return items.filter(item => item.for == "lor");
        case "blood":
          return items.filter(item => item.for == "blood");
        case "titanicus":
          return items.filter(item => item.for == "titanicus");
        case "killtem":
          return items.filter(item => item.for == "killtem");
        case "midnightHunt":
          return items.filter(item => item.for == "midnightHunt");
        case "adventuresInTheForgottenRealms":
          return items.filter(item => item.for == "adventuresInTheForgottenRealms");
        case "crimsonOath":
          return items.filter(item => item.for == "crimsonOath");
        case "choiceOfRavnica":
          return items.filter(item => item.for == "choiceOfRavnica");
        case "guildsOfRavnica":
          return items.filter(item => item.for == "guildsOfRavnica");
        case "warOfTheSpark":
          return items.filter(item => item.for == "warOfTheSpark");
        case "coreSet2021":
          return items.filter(item => item.for == "coreSet2021");
        case "throneOfEldraine":
          return items.filter(item => item.for == "throneOfEldraine")
        case "beyondTheThresholdOfDeath":
          return items.filter(item => item.for == "beyondTheThresholdOfDeath");
        case "lairOfTheGiants":
          return items.filter(item => item.for == "lairOfTheGiants");
        case "protectors":
          return items.filter(item => item.for == "protectors");
        case "albums":
          return items.filter(item => item.for == "albums")
        case "boxes":
          return items.filter(item => item.for == "boxes");
        case "cubes":
          return items.filter(item => item.for == "cubes");
        case "rugs":
          return items.filter(item => item.for == "rugs");
        case "pouches":
          return items.filter(item => item.for == "pouches")
        case "case":
          return items.filter(item => item.for == "case");
        case "colors":
          return items.filter(item => item.for == "colors");
        case "bosny":
          return items.filter(item => item.for == "bosny");
        case "vallejo":
          return items.filter(item => item.for == "pouches")
        case "brushes":
          return items.filter(item => item.for == "brushes");
        case "instruments":
          return items.filter(item => item.for == "instruments");
        case "decorations":
          return items.filter(item => item.for == "decorations");
        case "coasters":
          return items.filter(item => item.for == "coasters")
        case "board":
          return items.filter(item => item.allFor == "board")
        case "magic":
          return items.filter(item => item.allFor == "magic")
        case "warhammer":
          return items.filter(item => item.allFor == "warhammer")
        case "color":
          return items.filter(item => item.allFor == "color")
        case "acc":
          return items.filter(item => item.allFor == "acc")
        case "model":
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
   return (
      <>
         <CatalogPageItems discount={discount} availability = {availability} setFilters={setFilters} filters={filters} onFilter={onFilter}  filterPost={filterPost} setGoodName={setGoodName}  goodNem={goodNem} lists={lists}/>
      </>
   );
};

export default CatalogPage;
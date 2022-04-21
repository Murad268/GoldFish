import React, {useState, useEffect} from 'react';
import EventsListElementPage from '../components/EventsListElementPage/EventsListElementPage';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet'
const EventsPage = () => {

   const [events, setEvents] = useState([])
   const [filters, setFilters] = useState([
      {id: 1, value: "Magic: the Cathering", function: () => setFiltered("magic"),active: false, className: ""},
      {id: 2, value: "Warhammer 40000", function: () => setFiltered("warhammer"), active: false, className: ""},
      {id: 3, value: "Игровые вечера", function: () => setFiltered("gameNight"), active: false, className: ""},
      {id: 4, value: "Командные сражения", function: () => setFiltered("commandBattle"), active: false, className: ""},
      {id: 5, value: "Обучение", function: () => setFiltered("train"), active: false, className: ""},
      {id: 6, value: "Все", function: () =>  setFiltered("all"), active: true, className: "show"}
     
   ])
   const [filtered, setFiltered] = useState("all")
   const [date, setDate] = useState(new Date())
   const changeDate = (e) => {
      setDate(e)
   }

   const filter = (items, filter) => {
     
      switch(filter) {
         case "all":
            return items
         case "magic": 
            return items.filter(item => item.for == "magic")
         case "warhammer": 
            return items.filter(item => item.for == "warhammer")
         case "gameNight": 
            return items.filter(item => item.for == "gameNight")
         case "commandBattle": 
            return items.filter(item => item.for == "commandBattle")
         case "train": 
            return items.filter(item => item.for == "train")
      }
   }
   const onActivatedFilter = (id) => {
         window.scrollTo(0, 0);
         setFilters(prev => {
           return prev.map(pre => {
               if(pre.id == id) {
                  if(pre.active) {
                     return {...pre, active: false}
                  } else {
                     return {...pre, active: true}
                  }
               } else {
                  return {...pre, active: false}
               }
            })
         })
   }
   
   const onDate = (items, filter) => {
      switch(filter.toLocaleDateString()) {
         case  new Date("2023, 10, 31").toLocaleDateString():
            return items.filter(item => item.time.split(" ")[0] == "31.10.2023")
         case  new Date("2022, 07, 13").toLocaleDateString():
            return items.filter(item => item.time.split(" ")[0] == "13.07.2022")
         case  new Date("2025, 04, 15").toLocaleDateString():
            return items.filter(item => item.time.split(" ")[0] == "15.04.2025")
         case  new Date("2024, 12, 12").toLocaleDateString():
            return items.filter(item => item.time.split(" ")[0] == "12.12.2024")
         case  new Date("2022, 07, 08").toLocaleDateString():
            return items.filter(item => item.time.split(" ")[0] == "208.07.2022")
         case  new Date("2021, 12, 09").toLocaleDateString():
            return items.filter(item => item.time.split(" ")[0] == "09.12.2021")
         case  new Date("2021, 12, 10").toLocaleDateString():
            return items.filter(item => item.time.split(" ")[0] == "10.12.2021")
         case  new Date("2022, 10, 31").toLocaleDateString():
            return items.filter(item => item.time.split(" ")[0] == "31.10.2022")
         case  new Date("2021, 10, 12").toLocaleDateString():
            return items.filter(item => item.time.split(" ")[0] == "12.10.2021")
         default:
            return items
      }
   }
   return (
      <>
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Events</title>
            </Helmet>
        </div>
          <div style={{marginTop: "29px"}} className='container'>
                  <Link to="/"  style={{color:"black", textDecoration: "none", padding: "0 10px 0 0", fontWeight: 900}}>Главная</Link> 
                  {">"}    
                  <span style={{padding: "0 10px 0 10px", fontWeight: 300}}>Мероприятия</span>
           </div>
         <EventsListElementPage onDate = {onDate}  onActivatedFilter={onActivatedFilter} filtered={filtered} filter={filter} date={date} setDate={setDate} setEvents={setEvents} filters={filters} events={events}/>  
      </>
   );
};

export default EventsPage;
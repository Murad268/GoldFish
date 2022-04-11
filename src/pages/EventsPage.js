import React, {useState, useEffect} from 'react';
import EventsListElementPage from '../components/EventsListElementPage/EventsListElementPage';
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
      window.scrollTo(0, 0);
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
   return (
      <>
         <EventsListElementPage onActivatedFilter={onActivatedFilter} filtered={filtered} filter={filter} date={date} changeDate={changeDate} setEvents={setEvents} filters={filters} events={events}/>  
      </>
   );
};

export default EventsPage;
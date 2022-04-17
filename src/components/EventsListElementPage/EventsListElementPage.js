import React, {useState, useEffect} from 'react';
import './eventsListElementPage.css'
import EventListItem from '../eventListItem/EventListItem';
import Services from '../../services/Services'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { db } from '../../db';
const EventsListElementPage = ({setEvents, events, setDate, date, filters, filter, filtered, onActivatedFilter, onDate}) => {
   const res = new Services()


   useEffect(() => {
      // res.getRes("http://localhost:3000", "events").then(res => setEvents(res))
      setEvents(db.events)
   }, [])
   const filteredEvents = onDate(filter(events, filtered), date)
  
   // console.log(date.toLocaleDateString())

   const showFilter = () => {
      document.querySelector(".show").style.visibility = "visible"  
   }
   return (
      <div className='eventsListElementPage'>
         <div className="container">
            <h4 className="eventsListElementPage__tittle">Мероприятия</h4>
            <div className="event__main__wrapper">
               <div className="eventsListElementPage__wrapper">
               {
                  filteredEvents.map(event => {
                     console.log(event.time.split(" "))
               
                     return <EventListItem key={event.id} event={event} />
                  
                     
                  })
               }
              
               </div>
               <div className="event__filter">
                  <div className="calendar__box">
                     <Calendar onChange={(e) => setDate(e)} value={date} className="calendar" />
                     <button className='nullDate' onClick={() => setDate(new Date(new Date()))}>Обнулить дату</button>
                  </div>
                  
                  <div className="event__filter__box">
                     <h5>Тематика</h5>
                     <form>
                        {
                           filters.map(filter => {
                              let className = !filter.active?"eventFilterSpan": "eventFilterSpan eventFilterSpan__active"
                              return (
                                 <div  className={filter.className} key={filter.id}>
                                    <input id={filter.value} value={filter.value} onChange={(e) => {              
                                       filter.function()
                                       onActivatedFilter(filter.id)
                                       showFilter()
                                    }} name='filterEvents' type="radio" />
                                    <label htmlFor={filter.value}  className={className}>{filter.value}</label>
                                 </div>
                              )
                           })
                        }
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default EventsListElementPage;
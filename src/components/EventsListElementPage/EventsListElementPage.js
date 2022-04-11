import React, {useState, useEffect} from 'react';
import './eventsListElementPage.css'
import EventListItem from '../eventListItem/EventListItem';
import Services from '../../services/Services'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
const EventsListElementPage = ({setEvents, events, changeDate, date, filters, filter, filtered, onActivatedFilter}) => {
   const res = new Services()
   useEffect(() => {
      res.getRes("http://localhost:3000", "events").then(res => setEvents(res))
   }, [])
   const filteredEvents = filter(events, filtered)
  


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
                     return <EventListItem key={event.id} event={event} />
                  })
               }
               </div>
               <div className="event__filter">
                  <div className="calendar__box">
                     <Calendar onChange={changeDate} value={date} className="calendar" />
                  </div>
                  <div className="event__filter__box">
                     <h5>Тематика</h5>
                     <form>
                        {
                           filters.map(filter => {
                              let className = !filter.active?"eventFilterSpan": "eventFilterSpan eventFilterSpan__active"
                              return (
                                 <div onClick={showFilter} className={filter.className} key={filter.id}>
                                    <input id={filter.value} value={filter.value} onChange={(e) => {              
                                       filter.function()
                                       onActivatedFilter(filter.id)
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
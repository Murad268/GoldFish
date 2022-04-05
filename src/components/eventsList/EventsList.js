import React, {useState, useEffect} from 'react';
import './eventsList.css'
import Services from '../../services/Services'
import EventListItem from '../eventListItem/EventListItem';
const EventsList = () => {
   const [events, setEvents] = useState([])
   const [show, setShow] = useState(2)
   const res = new Services()
   useEffect(() => {
      res.getRes("http://localhost:3000", "events").then(res => setEvents(res))
   }, [])
   return (
      <div className='eventList'>
         <div className="container">
            <h3 className="eventList__tittle">Ближайшие мероприятия</h3>
            <div className="eventList__wrapper">
               {
                  events.map(event => {
                     if(event.id > show) {
                        return false
                     } else {
                        return <EventListItem event={event} key={event.id}/>
                     }
                     
                  })
               }
            </div>
            <button onClick={() => setShow(prev => prev + 2)} className="event__load">Показать еще</button>
         </div>
      </div>
   );
};

export default EventsList;
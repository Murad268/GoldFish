import React, {useState, useEffect} from 'react';
import './eventsList.css'
import Services from '../../services/Services'
import EventListItem from '../eventListItem/EventListItem';
import { Link } from 'react-router-dom';
import { db } from '../../db';
const EventsList = () => {
   const [events, setEvents] = useState([])
   const [show, setShow] = useState(2)
   const res = new Services()
   useEffect(() => {
      // res.getRes("http://localhost:3000", "events").then(res => setEvents(res))
      setEvents(db.events)
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
            <Link to="/events" className="event__load">Показать еще</Link>
         </div>
      </div>
   );
};

export default EventsList;
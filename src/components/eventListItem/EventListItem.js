import React from 'react';
import './eventListItem.css'
import { Link } from 'react-router-dom';
const EventListItem = ({event}) => {
   return (
      <Link to={`/events/${event.id}`} className='eventListItem'>
         <div className="eventListItem__img">
            <img src={event.img} alt="" />
         </div>
         <div className="eventListItem__footer">
            <div className="event_name_time">
               <div className="event__name">{event.name}</div>
               <div className="event__time">{event.time}</div>
            </div>
            <div className="event__desc">
               {
                  event.desc.length > 70 ? <p>{event.desc.slice(0, 60)}...</p>:event.desc
               }
            </div>
         </div>
      </Link>
   );
};

export default EventListItem;
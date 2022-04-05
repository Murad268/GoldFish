import React from 'react';
import './eventListItem.css'
const EventListItem = ({event}) => {
   return (
      <div className='eventListItem'>
         <div className="eventListItem__img">
            <img src={event.img} alt="" />
         </div>
         <div className="eventListItem__footer">
            <div className="event_name_time">
               <div className="event__name">{event.name}</div>
               <div className="event__time">{event.time}</div>
            </div>
            <div className="event__desc">{event.desc}</div>
         </div>
      </div>
   );
};

export default EventListItem;
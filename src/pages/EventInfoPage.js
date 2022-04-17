import React from 'react';
import EventPage from '../components/eventPage/EventPage';
const EventInfoPage = ({sendEmail={sendEmail}}) => {
   return (
      <>
         <EventPage sendEmail={sendEmail}/>
      </>
   );
};

export default EventInfoPage;
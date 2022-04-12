import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import Services from '../../services/Services'
import EventRegModal from '../eventRegModal/EventRegModal';
import './eventPage.css'
const EventPage = () => {
   const res = new Services()
   const [event, setEvent] = useState({})
   const [modalActive, setModalActive] = useState(false)
   const activateModal = () => {
      setModalActive(true)
      document.body.style.overflow = "hidden"
      document.querySelector("html").style.paddingRight = "17px"
   }
   const exitModal = (e) => {
      e.stopPropagation()
      if(e.target.classList.contains("eventRegModal")) {
         setModalActive(false)
         document.body.style.overflow = ""
         document.querySelector("html").style.paddingRight = ""
      }
      
   }
   const {eventId} = useParams()
   useEffect(() => {
      res.getRes("http://localhost:3000", `events/${eventId}`).then(res => setEvent(res))
   }, [])
   return (
      <div className='eventPage'>
         <EventRegModal exitModal={exitModal} modalActive={modalActive} />
         <div style={{marginTop: "9px", marginBottom: "15px"}} className='container'>
           <Link to="/"  style={{color:"white", textDecoration: "none", padding: "0 10px 0 0", fontWeight: 900}}>Главная</Link> 
           {">"}    
           <span style={{color:"white", padding: "0 10px 0 10px", fontWeight: 300}}>{event.name}</span>
      </div>
         <div className="container">
            <div className="eventPage__wrapper">
               <div className="event__information">
                  <h5 className='event__tittle'>{event.name}</h5>
                  <div className='event__time'>{event.time?event.time.split(" ")[0]:null}</div>
                  <img src={event.img} alt="" />
                  <p>{event.desc}</p>
               </div>
               <div className="eventReg">
                  <h5>Успей зарегистрироваться</h5>
                  <div>Стоимость: <span>{event.price}₽</span></div>
                  <div>Осталось: <span>{event.free}  мест</span></div>
                  <div>Дата: <span>{event.time?event.time.split(" ")[0]:null}</span></div>
                  <div>Время: <span>{event.time?event.time.split(" ")[1]:null}</span></div>
                  <button onClick={activateModal} className="eventReg__button">Зарегистрироваться</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default EventPage;
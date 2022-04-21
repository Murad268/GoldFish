import React, {Suspense, lazy, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from './pages/MainPage';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import CatalogPage from './pages/CatalogPage';
import AbautUs from './pages/AbautUs';
import EventsPage from './pages/EventsPage';
import EventInfoPage from './pages/EventInfoPage';
import ContactPage from './pages/ContactPage';
import NewsPage from './pages/NewsPage'
import GoodPage from './pages/GoodPage';
import SuccesModal from './components/succesModal/SuccesModal';
import ContactModal from './components/contactModal/ContactModal'
import upF from './images/up/up-arrow-png-27176-Windows.ico'
const App = () => {
      const [up, setUp] = useState(false)
      const [send, setSend] = useState({
        error: false,
        succes: false
      })
      const sendEmail = () => {
        setSend(prev => ({...prev, succes: true}))
    }
      const exitModal = () => {
          setSend(prev => ({...prev, succes: false}))
      }

      const [activeModal, setActiveModal] = useState(false)
      const activatedModal = () => {
        setActiveModal(true)
      }
      const exitActivatedModal = () => {
        setActiveModal(false)
      }
      

      const scrolling = () => {
       
    
        window.addEventListener("scroll", () => {
           if(document.documentElement.scrollTop > 650) {
              setUp(true)
           } else {
              setUp(false)
           }
        });
        
     };
     scrolling()
  return (
    <Router>
        <div>
          <SuccesModal send={send} exitModal={exitModal}/>
          <ContactModal sendEmail={sendEmail} exitActivatedModal={exitActivatedModal} activeModal={activeModal} />
          <Navbar/>
          <Suspense fallback="loading...">
            <Routes>
              <Route path='/' element={<MainPage sendEmail={sendEmail}/>}/>
              <Route path='/catalog' element={<CatalogPage/>}/>
              <Route path='/about' element={<AbautUs/>}/>
              <Route path='/:forIt' element={<CatalogPage/>}/>
              <Route path='/events' element={<EventsPage/>}/>
              <Route path='/events/:eventId' element={<EventInfoPage sendEmail={sendEmail}/>}/>
              <Route path='/contacts' element={<ContactPage/>}/>
              <Route path='/NewsPage/:newsId' element={<NewsPage/>}/>
              <Route path='/catalog/:goodId' element={<GoodPage/>}/>
            </Routes>
          </Suspense>
          <Footer activatedModal={activatedModal}/>
          {
        up?
        <a style={{"display": "block", "position": "fixed", "bottom": "5px", "right": "5px", "cursor": "pointer"}} href="#nav">
          <img style={{"width": "50px", "height": "50px", "objectFit": "fill"}} src={upF} alt="" />
        </a>
        :null
      }
      </div>
    </Router>
  );
};

export default App;
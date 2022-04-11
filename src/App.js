import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from './pages/MainPage';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import CatalogPage from './pages/CatalogPage';
import AbautUs from './pages/AbautUs';
import EventsPage from './pages/EventsPage';
const App = () => {
  return (
    <Router>
        <div>
          <Navbar/>
          <Suspense fallback="loading...">
            <Routes>
              <Route path='/' element={<MainPage/>}/>
              <Route path='/catalog' element={<CatalogPage/>}/>
              <Route path='/about' element={<AbautUs/>}/>
              <Route path='/:forIt' element={<CatalogPage/>}/>
              <Route path='/events' element={<EventsPage/>}/>
            </Routes>
          </Suspense>
          <Footer/>
      </div>
    </Router>
  );
};

export default App;
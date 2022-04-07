import React from 'react';
import MainPage from './pages/MainPage';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import CatalogPage from './pages/CatalogPage';
const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <MainPage/> */}
      <CatalogPage/>
      <Footer/>
    </div>
  );
};

export default App;
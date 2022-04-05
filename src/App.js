import React from 'react';
import MainPage from './pages/MainPage';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <MainPage/>
      <Footer/>
    </div>
  );
};

export default App;
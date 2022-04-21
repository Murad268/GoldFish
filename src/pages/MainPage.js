import React  from 'react';
import {Helmet} from "react-helmet";
import SldierItems from '../components/sliderItems/SldierItems';
import Catalog from '../components/catalog/Catalog';
import GoodCatalogListSlider from '../components/goodCatalogListSlider/GoodCatalogListSlider';
import SpecialGood from '../components/specialGood/SpecialGood';
import EventsList from '../components/eventsList/EventsList';
import About from '../components/abaut/About';
import News from '../components/news/News';
import Contacts from '../components/contacts/Contacts';
const MainPage = ({sendEmail}) => {
   return (
      <>
         <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
        </div>
         <SldierItems/>
         <Catalog/>
         <GoodCatalogListSlider/>
         <SpecialGood/>
         <EventsList />
         <News/>
         <About/> 
         <Contacts sendEmail={sendEmail}/>
      </>
   );
};

export default MainPage;
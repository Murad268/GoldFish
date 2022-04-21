import React from 'react';
import Contacts from '../components/contacts/Contacts';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet'
const ContactPage = () => {
   return (
      <>
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contacts</title>
            </Helmet>
        </div>
         <div style={{marginTop: "29px"}} className='container'>
            <Link to="/"  style={{color:"black", textDecoration: "none", padding: "0 10px 0 0", fontWeight: 900}}>Главная</Link> 
            {">"}    
            <span style={{padding: "0 10px 0 10px", fontWeight: 300}}>Контакты</span>
         </div>
         <Contacts/>
      </>

   );
};

export default ContactPage;
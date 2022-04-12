import React from 'react';
import { Link } from 'react-router-dom';
import AbautCentre from '../components/aboutCentre/AbautCentre';
const AbautUs = () => {
   return (
      <>
       <div style={{marginTop: "29px", marginBottom: "9px"}} className='container'>
           <Link to="/"  style={{color:"black", textDecoration: "none", padding: "0 10px 0 0", fontWeight: 900}}>Главная</Link> 
           {">"}    
           <span style={{padding: "0 10px 0 10px", fontWeight: 300}}>О центре</span>
      </div>
         <AbautCentre/>
      </>
   );
};

export default AbautUs;
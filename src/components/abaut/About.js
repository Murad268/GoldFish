import React from 'react';
import './abaut.css'
import ph from '../../images/abaut/image 21.png'
const About = () => {
   return (
      <div className='abaut'>
         <div className="container">
            <div className="abaout__wrapper">
               <div className="abaut__desc">
                     <h3 className="about__desc__tittle">
                        Об игровом центре «GoldFish»  
                     </h3>
                     <div className="about__desc__desc">
                        «GoldFish»- магазин, в котором Вы можете купить отличный подарок 
                        как для себя, так и для своих близких. 
                        <br />
                        <br />
                        В ассортименте нашего магазина представлены тысячи настольных игр на любой вкус: простые и посложнее, семейные и только для взрослых, для двоих и для больших компаний, детективные и логические, ролевые и стратегические настолки. «GoldFish» также  регулярно проводит собственные игротеки:турниры по Magic: the Gathering (от компании Wizards of the coast) и Warhammer (от Games Workshop). 
                        <br />
                        <br />
                        В нашем магазине можно найти нужные аксессуары для любимых игр (протекторы для карт и коллекций), инструменты для самостоятельного оформления и покраски фигурок (кейсы, подставк=и, краски Vallejo и др.) и многое другое. 
                        <br />
                        <br />
                        «GoldFish» - это не только магазин настольных игр, но и полноценный хобби-центр. Здесь можно арендовать столы для игр с друзьями, проходить обучение и мастер-классы по интересующим тебя играм, заводить новые знакомства и приобщаться к игровому комьюнити!
                     </div>
                  </div>
                  <div className="abaout__img">
                     <img src={ph} alt="" />
                  </div>
            </div>
         </div>
      </div>
   );
};

export default About;
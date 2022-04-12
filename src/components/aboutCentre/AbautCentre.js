import React from 'react';
import './abautCentre.css'
import ph1 from '../../images/abaoutCentre/image 131.png'
import ph2 from '../../images/abaoutCentre/image 21.png'
import ph3 from '../../images/abaoutCentre/Rectangle 126.png'
import ph4 from '../../images/abaoutCentre/Rectangle 128.png'
const AbautCentre = () => {
   return (
      <div className='abaoutCentre'>
         <div className="container">
         <h5 className="aboutCentre__tittle">О центре</h5>
         <div className="abaoutCentre__wrapper">        
            <div>
               <div>
                  <h4>Наша миссия</h4>
                  <p className='about__desc'>Разнообразный и богатый опыт укрепление и развитие структуры в значительной степени обуславливает создание модели развития. Разнообразный и богатый опыт консультация с широким активом позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке новых предложений. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание новых предложений.</p>
               </div>
               <div className='about__image'>
                  <div>
                     <img src={ph1} alt="" />
                  </div>
                  <div>
                     <img src={ph2} alt="" />
                  </div>
               </div>
            </div>
                <div>
                  <div className='about__image'>
                        <div>
                           <img src={ph3} alt="" />
                        </div>
                        <div>
                           <img src={ph4} alt="" />
                        </div>
                     </div>
                     <div>
                        <h4>Наши мероприятия</h4>
                        <p className='about__desc'>Не следует, однако забывать, что укрепление и развитие структуры представляет собой интересный эксперимент проверки модели развития. С другой стороны реализация намеченных плановых заданий в значительной степени обуславливает создание систем массового участия.</p>
                     </div>
                </div>
            <div>

            </div>
         </div>

         </div>
      </div>
   );
};

export default AbautCentre;
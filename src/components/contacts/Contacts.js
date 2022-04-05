import React from 'react';
import Map from '../map/Map';
import './contacts.css'
import tel from '../../images/contacts/tel.png'
import address from '../../images/contacts/location.png'
import email from '../../images/contacts/email.png'
import time from '../../images/contacts/time.png'
const Contacts = () => {
   return (
      <div className='contacts'>
        <div className="container">
           <h3 className="contacts__tittle">Контакты</h3>
           <div className="contact__wrapper">
              <div className="contacts__infos">
                  <div className="contacts__info">
                     <img src={tel} alt="" className="contacts__tel__icon" />
                     <div className="contacts__tel__desc"><span>Телефон:</span>+7 (495) 911-10-11</div>
                  </div>
                  <div className="contacts__info">
                     <img src={email} alt="" className="contacts__email__icon" />
                     <div className="contacts__email__desc"><span>E-mail:</span> msk@magicgoldfish.ru</div>
                  </div>
                  <div className="contacts__info">
                     <img src={address} alt="" className="contacts__adress__icon" />
                     <div className="contacts__adress__desc"><span>Адрес:</span> г. Москва ст.м. Таганская (кольцевая) Малый Дровяной переулок 6</div>
                  </div>
                  <div className="contacts__info">
                     <img src={time} alt="" className="contacts__time__icon" />
                     <div className="contacts__time__desc"><span>Режим работы клуба:</span> 11:00-23:00 (ежедневно)</div>
                  </div>
                  <h2 className="formTittle">Остались вопросы?</h2>
                  <form action="#" className="manMenuForm">
                     <label className='manMenuFormLabel' htmlFor="name"> Ваше имя </label>
                        <input placeholder='Имя' type="text" id="name" name="name"/>
                     <label className='manMenuFormLabel' htmlFor="tel"> Ваш телефон</label>
                        <input  type="text" id="tel" name="tel"/>
                     <label className='manMenuFormLabel' htmlFor="text">Ваш комментарий  </label>
                        <textarea placeholder='Комментарий' name="text" id="text"></textarea>
                        <button className="manMenuForm__button">Заказать звонок</button>
                  </form>
                  <div className="formTittle__alert">
                  Нажимая на кнопку "Заказать звонок", <a href="#">я даю согласие на 
                  обработку персональных данных.</a>
                  </div>
              </div>
              <Map/>
           </div>
        </div>
      </div>
   );
};

export default Contacts;
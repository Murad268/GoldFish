import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup'
import SuccesModal from '../succesModal/SuccesModal';
import Map from '../map/Map';
import './contacts.css'
import tel from '../../images/contacts/tel.png'
import address from '../../images/contacts/location.png'
import email from '../../images/contacts/email.png'
import time from '../../images/contacts/time.png'
const Contacts = ({sendEmail }) => {
   const [value, setValue] = useState({
      name: ""
   })
   const sendMail = (e) => { 
      // if I had an api and an error came from it, then errorSucces component would be used
      document.querySelector(".manMenuForm").reset()
      sendEmail()   
   }
   const setName = (e) => {
      setValue(prev => ({...prev, name: e.target.value}))
   }
   return (
      <div id='contacts' className='contacts'>
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
                  <Formik
                     initialValues = {{
                        name: '',
                        tel: '',
                        text: ''
                  }}
                  validationSchema = {Yup.object({
                        name: Yup.string().required('Пожалуйста, укажите свое имя, чтобы связаться с нами'),
                        tel: Yup.string().required('Пожалуйста, введите свой номер, чтобы мы могли связаться с вами'),
                        text: Yup.string().required('Ваше мнение очень важно для нас')
                  })}
                     onSubmit  = { () => {
                        sendMail()  
                       
                        
                     }}
                  >
                     <Form action="#" className="manMenuForm">
                        <label className='manMenuFormLabel' htmlFor="name"> Ваше имя </label>
                           <Field  placeholder='Имя' type="text" id="name" name="name"/>
                           <FormikErrorMessage component="div" className="char__search-error" name="name" />   
                        <label className='manMenuFormLabel' htmlFor="tel"> Ваш телефон</label>
                           <Field placeholder="Ваш телефон" type="text" id="tel" name="tel"/>
                           <FormikErrorMessage component="div" className="char__search-error" name="tel" />   
                        <label className='manMenuFormLabel' htmlFor="text">Ваш комментарий  </label>
                           <Field as="textarea" placeholder='Комментарий' name="text" id="text"></Field>
                           <FormikErrorMessage component="div" className="char__search-error" name="text" />   
                           <button className="manMenuForm__button">Заказать звонок</button>
                     </Form>
                  </Formik>
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
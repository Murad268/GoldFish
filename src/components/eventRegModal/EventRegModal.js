import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup'
import { Link } from 'react-router-dom';
import SuccesModal from '../succesModal/SuccesModal';
import './eventRegModal.css'
const EventRegModal = ({modalActive, exitModal, sendEmail}) => {
   const [send, setSend] = useState({
      error: false,
      succes: false
   })
   const sendMail = () => {
      // if I had an api and an error came from it, then errorSucces component would be used
      sendEmail()
      document.querySelector(".eventRegModalForm").reset()
   }
   let className = !modalActive?"eventRegModal":"eventRegModal eventRegModal__active"
   return (
      <div onClick={exitModal} className={className}>
         <div className="eventRegModal__div">
            <Formik
            initialValues = {{
               name: '',
               tel: '',
            }}
            validationSchema = {Yup.object({
               name: Yup.string().required('Пожалуйста, укажите свое имя, чтобы связаться с нами'),
               tel: Yup.string().required('Пожалуйста, введите свой номер, чтобы мы могли связаться с вами'),
            })}
               onSubmit  = { () => {
                  sendMail()
               }}
            >
               <Form className='eventRegModalForm' action="">
                     <h5 className="eventRegModal__div__tittle">Регистрация на мероприятие</h5>
                     <label htmlFor="name">Ваше имя:</label>
                     <Field id='name' name='name' type="text" />
                     <FormikErrorMessage component="div" className="char__search-error" name="name" />   
                     <label htmlFor="phone">Ваш телефон:</label>
                     <Field id='phone' name='tel' type="tel" />
                     <FormikErrorMessage component="div" className="char__search-error" name="tel" />   
                     <Link className='eventRegModal__div__link' to="/">Войти или зарегистрироваться на сайте</Link>
                     <button>Оплатить</button>
                  </Form>
            </Formik>
         </div>
      </div>
   );
};

export default EventRegModal;
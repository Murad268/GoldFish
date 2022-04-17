import React from 'react';
import './contactModal.css'
import location from "../../images/modalform/loaction.png"
import mail from "../../images/modalform/email.png"
import phone from "../../images/modalform/phone.png"
import telegram from "../../images/modalform/telegram.png"
import close from "../../images/modalform/close.png"
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup'

const ContactModal = ({activeModal, exitActivatedModal, sendEmail}) => {
   const className = !activeModal?"ContactModal":"ContactModal ContactModal__active"
   const sendMail = () => {
      document.querySelector(".condatcModalForm").reset()
      sendEmail()
   }
   return (
         <>
                     <div className={className}>
                     <div onClick={exitActivatedModal} className='ContactModal__exit'><img src={close} alt="" /></div>
                     <div className="modalFormDivWrapper">
                        <div className="modalFormDiv">
                     
                           <div className="modalFormDiv__tittle">Məlumatlarınızı daxil edin</div>
                           <Formik
                           initialValues = {{
                              name: '',
                              email: '',
                              phone: '',
                              subject:'',
                              message: ''
                          }}
                          validationSchema = {Yup.object({
                              name: Yup.string().required('Sizə müraciətiət etmək üçün adınızı qeyd etməyinizi xahiş edirik'),
                              email: Yup.string().email().required('Xahiş edirik poç ünvanınızı düzgün daxil edəsiniz'),
                              phone: Yup.string().required('Xahiş edirik sizinlə  ir başa əlaqə saxlaya bilməyimiz üçün nömrənizi daxil edəsiniz'),
                              subject: Yup.string().required('Xahiş bildirişinizin nə barədə olduğunu qeyd edəsiniz'),
                              message: Yup.string().required('This field is required'),
                          })}
                           onSubmit  = { (values, {resetForm})=> {
                              sendMail()
                           }}>
                              <Form className='condatcModalForm'>
                                 <Field id='modalName' name='name' type="text" placeholder='adınız'/>   
                                 <Field id='modalEmail' name='email' type="email" placeholder='poçt ünvanınız'/>
                                 <FormikErrorMessage component="div" className="char__search-error" name="name" />
                                 <FormikErrorMessage component="div" className="char__search-error" name="email" />  
                                 <Field id='modalohone' name='phone' type="text" placeholder='Telefon nömrəniz'/>
                                 <FormikErrorMessage component="div" className="char__search-error" name="phone" />  
                                 <Field name='subject' type="text" placeholder='məktubunuzun mövzusu'/>
                                 <FormikErrorMessage component="div" className="char__search-error" name="subject" />  
                                 <Field as="textarea" name="message" id="" placeholder='məktubunuz'></Field>
                                 <FormikErrorMessage component="div" className="char__search-error" name="message" />  
                                 <button>send message</button>
                              </Form>
                           </Formik>
                        </div>
                        <div className="formIconsDiv">
                           <div className="formIconsDiv__tittle">Contact us</div>
                           <div className="formIconsDiv__column">
                                 <div className="formIconsDiv__column__img">
                                    <img src={location} alt="" />
                                 </div>
                                 <div className="formIconsDiv__column__desc"><span>Address</span>: 198 West 21th Street, Suite 721 New York NY 10016</div>
                           </div>
                           <div className="formIconsDiv__column">
                                 <div className="formIconsDiv__column__img">
                                    <img src={phone} alt="" />
                                 </div>
                                 <div className="formIconsDiv__column__desc"><span>Phone</span>: + 1235 2355 98</div>
                           </div>
                           <div className="formIconsDiv__column">
                                 <div className="formIconsDiv__column__img">
                                    <img src={mail} alt="" />
                                 </div>
                                 <div className="formIconsDiv__column__desc"><span>Email</span>: info@yoursite.com</div>
                           </div>
                           <div className="formIconsDiv__column">
                                 <div className="formIconsDiv__column__img">
                                    <img src={telegram} alt="" />
                                 </div>
                                 <div className="formIconsDiv__column__desc"><span>Email</span>: agamedov94@Mail.ru</div>
                           </div>
                        </div>
                     </div>
               </div>
      
           
         </>
   );
};

export default ContactModal;
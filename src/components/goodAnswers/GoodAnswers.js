import React, { useState } from 'react';
import Description from '../description/Description';
import Characteristics from '../characteristics/Characteristics';
import AnswerQuestion from '../answer-question/AnswerQuestion';
import './goodAnswers.css'
const GoodAnswers = ({good}) => {

   const [tabs, setTabs] = useState(
      [
         {id: 1, value: "Описание", active: true, filter: "description"},
         {id: 2, value: "Характеристики", active: false, filter: "characteristics"},
         {id: 3, value: "Вопрос-ответ", active: false, filter: "question-answer"}
      ])
   const [viesTab, setViewTab] = useState("description")
      const activateTab = (id, value) => {
        setViewTab(value)
        return setTabs(prev => {
           return prev.map(pre => {
               if(pre.id == id) {
                  return {...pre, active: true}
               } else {
                  return {...pre, active: false}
               }
              
            })
         })
      }

   return (
      
      <div className='goodAnswers'>
        <div className="good__tabs">
            {
               tabs.map(tab => {
                  let className = tab.active?"good__tab good__tab__active":"good__tab"
                  return <div onClick={()=>activateTab(tab.id, tab.filter)} key = {tab.id}  className={className}>{tab.value}</div>
               })
               }
        </div>
        <hr />
         {
            viesTab == "description"?
            <Description good={good}/>
            :
            viesTab == "characteristics"?
            <Characteristics good={good}/>
            :<AnswerQuestion good={good}/>
         }
               
        


       


        


        

      
       
      </div>
   );
};

export default GoodAnswers;
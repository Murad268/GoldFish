import React from 'react';
import './characteristics.css'
const Characteristics = ({good}) => {
   return (
      <div className='characteristics'>
         <ul>
            <li>Возраст: <span>{good.age}</span>;</li>
            <li>Игроки: <span>{good.hum}</span>;</li>
            <li>Время игры: <span>{good.time}</span> мин;</li>
            <li>Размеры: <span>{good.sizes}</span> мм;</li>
            <li>Вес: <span>{good.weight}</span> гр;</li>
            <li>Производитель: <span>{good.manufacturer}</span>.</li>
         </ul>
      </div>
   );
};

export default Characteristics;
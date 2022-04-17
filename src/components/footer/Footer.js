import React from 'react';
import './footer.css'
import logo from '../../images/navbar/l3 1.png'
import vk from '../../images/navbar/bi_instagram.png'
import fb from '../../images/navbar/fb.png'
import insta from '../../images/navbar/bi_instagram.png'
const Footer = ({activatedModal}) => {
   return (
      <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Каталог</h3>
                        <ul>
                            <li><a href="#">Warhammer 40000</a></li>
                            <li><a href="#">Настольные игры</a></li>
                            <li><a href="#">Magic: the Gathering</a></li>
                            <li><a href="#">Аксессуары для игр</a></li>
                            <li><a href="#">Краски</a></li>
                            <li><a href="#">Краски</a></li>
                            <li><a href="#">Аксессуары для</a></li>
                            <li><a href="#">моделизма</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Правила клуба</h3>
                        <ul>
                            <li><a href="#">Мероприятия</a></li>
                            <li><a href="#">О нас</a></li>
                            <li><a href="#">Контакты</a></li>
                            <li><a href="#">Блог</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>
                            <img src={logo} alt="" />
                        </h3>
                        <div>
                            <div><a href="">+7 (495) 911-10-11</a> </div>
                            <div><a href="">msk@magicgoldfish.ru</a></div>
                            <div>г. Москва ст.м. Таганская Малый Дровяной переулок 6</div>
                        </div>
                        <button onClick={() => activatedModal()} className="footer__button">Заказать звонок</button>
                    </div>
                    <div className="col item social">
                        <a href="#"><img src={insta} alt="" /></a>
                        <a href="#"><img src={fb} alt="" /></a>
                        <a href="#"><img src={vk} alt="" /></a>
                    </div>
                </div>
                <p className="copyright">Goldfish © 2022</p>
            </div>
        </footer>
    </div>
   );
};

export default Footer;
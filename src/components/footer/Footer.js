import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
import logo from '../../images/navbar/l3 1.png'
import vk from '../../images/navbar/bi_instagram.png'
import fb from '../../images/navbar/fb.png'
import insta from '../../images/navbar/bi_instagram.png'
const Footer = ({activatedModal}) => {
    const onUp = (id) => {
        window.scrollTo(0, 0);
    }
   return (
      <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Каталог</h3>
                        <ul>
                            <li><Link onClick={onUp} to={"/warhammer"} >Warhammer 40000</Link></li>
                            <li><Link onClick={onUp} to={"/board"}>Настольные игры</Link></li>
                            <li><Link onClick={onUp} to={"/magic"}>Magic: the Gathering</Link></li>
                            <li><Link onClick={onUp} to={"acc"}>Аксессуары для игр</Link></li>
                            <li><Link onClick={onUp} to={"/colors"}>Краски</Link></li>
                            <li><Link onClick={onUp} to={"/model"}>Аксессуары для моделизма</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Разделы</h3>
                        <ul>
                            <li><Link to={"/events"}>Мероприятия</Link></li>
                            <li><Link to={"/about"}>О нас</Link></li>
                            <li><Link to={"/contacts"}>Контакты</Link></li>
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
                        <a href="https://www.instagram.com/club.goldfish/"><img src={insta} alt="" /></a>
                        <a href="https://www.facebook.com/magicgoldfish/"><img src={fb} alt="" /></a>
                        <a href="https://vk.com/goldfishwargames"><img src={vk} alt="" /></a>
                    </div>
                </div>
                <p className="copyright">Goldfish © 2022</p>
            </div>
        </footer>
    </div>
   );
};

export default Footer;
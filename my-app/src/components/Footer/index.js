import React from 'react';
import styles from './Footer.module.css'
import arrow from '../../assets/icons/footer/vector_21.svg'

import location from '../../assets/icons/footer/vector_23.svg'
import message from '../../assets/icons/footer/vector_24.svg'
import call from '../../assets/icons/footer/vector_25.svg'


function Footer(props) {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <div className={styles.block}>
                        <h2>Наш адрес</h2>
                        <div>
                            <img src={location} alt=""/>
                            <a>г.Бишкек, 720044 <br/> проспект Ч. Айтматова 27</a>
                        </div>
                        <div>
                            <img src={message} alt=""/>
                            <a>bhu@bhu.kg</a>
                        </div>
                        <div>
                            <img src={call} alt=""/>
                            <a>+996 (312) 12-86-59</a>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <h2>Быстрые ссылки</h2>
                        <div>
                            <img src={arrow} alt=""/>
                            <a>Главная</a>
                        </div>
                        <div>
                            <img src={arrow} alt=""/>
                            <a>О нас</a>
                        </div>
                        <div>
                            <img src={arrow} alt=""/>
                            <a>Контакты</a>
                        </div>
                    </div>
                    <div className={styles.block}>
                            <h2>Полезные ссылки</h2>
                            <div>
                                <img src={arrow} alt=""/>
                                <a>Помощь</a>
                            </div>
                            <div>
                                <img src={arrow} alt=""/>
                                <a>Наши филиалы</a>
                            </div>
                            <div>
                                <img src={arrow} alt=""/>
                                <a>Колледж</a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
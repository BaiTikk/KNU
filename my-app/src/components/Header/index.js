import React from 'react';
import styles from './Header.module.css';
import instagram from '../../assets/icons/header/download_1.svg'
import whatsapp from '../../assets/icons/header/download_2.svg'
import telegram from '../../assets/icons/header/download_3.svg'
import shadowOne from  '../../assets/icons/header/mountainLeft.jpg'
import shadowTwo from  '../../assets/icons/header/mountainRight.jpg'
import knu from '../../assets/icons/header/knu.svg'

function Header(props) {
    return (
        <header className={styles.header}>
            <img className={shadowOne} src={shadowOne} alt=""/>
            <div className={styles.container}>
                <nav className={styles.inner}>
                    <div className={styles.center}>
                        <img src={knu} alt=""/>
                        <div className={styles.texts}>
                            <h2>Главная</h2>
                            <h2>О нас</h2>
                            <h2>Контакты</h2>
                            <h2>НПА</h2>
                            <h2>Помощь</h2>
                            <div>
                                <h2>Ru</h2>
                            </div>
                        </div>
                        <div className={styles.socialMedia}>
                            <img src={instagram} alt=""/>
                            <img src={whatsapp} alt=""/>
                            <img src={telegram} alt=""/>
                        </div>
                    </div>
                </nav>
            </div>
            <img className={shadowTwo} src={shadowTwo} alt=""/>
        </header>
    );
}

export default Header;
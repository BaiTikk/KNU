import React from 'react';
import styles from './Info.module.css'
import arrow from '../../assets/icons/info/vector_2.svg'

function Info(props) {
    return (
        <div className={styles.info}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <h2>Информационный портал</h2>
                    <h3>Важно не количество знаний, а их качество</h3>
                    <div className={styles.buttons}>
                        <button>Премий и награды <img src={arrow} alt=""/></button>
                        <button>Ученым КНУ <img src={arrow} alt=""/></button>
                        <button>Дополнительное образование <img src={arrow} alt=""/></button>
                        <button>Иностранным абитуриентам <img src={arrow} alt=""/></button>
                        <button>Контакты <img src={arrow} alt=""/></button>
                        <button>Электронная приемная <img src={arrow} alt=""/></button>
                    </div>
                    <p>Все о Бишкекском университете</p>
                </div>
            </div>
        </div>
    );
}

export default Info;
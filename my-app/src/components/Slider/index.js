import React from 'react';
import styles from './Slider.module.css'
import avaOne from '../../assets/images/slider/ava.jpg'
import avaTwo from '../../assets/images/slider/avaTwo.jpg'
import avaThree from '../../assets/images/slider/avaThree.jpg'

function Slider(props) {
    return (
        <div className={styles.slider}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <div className={styles.slide}>
                        <h2>Администрация</h2>
                        <img src={avaOne} alt=""/>
                    </div>
                    <div className={styles.slide}>
                        <h2>Лучшие студенты</h2>
                        <img src={avaTwo} alt=""/>
                    </div>
                    <div className={styles.slide}>
                        <h2>Состав <br/>преподавателей</h2>
                        <img src={avaThree} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
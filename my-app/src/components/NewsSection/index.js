import React from 'react';
import styles from './NewsSection.module.css'

function NewsSection(props) {
    return (
        <div className={styles.newsSection}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <h2>Новостной блок</h2>
                    <h3>Последние события университета</h3>
                    <div className={styles.blocks}>
                        <div className={styles.block}>
                            <p>Профессору, историку Сапаралиеву Дөөлөтбеку Бекишовичу 70 лет</p>
                            <div className={styles.anchor}>
                                <a href="">Подробнее</a>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <p>Профессору, историку Сапаралиеву Дөөлөтбеку Бекишовичу 70 лет</p>
                            <div className={styles.anchor}>
                                <a href="">Подробнее</a>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <p>Профессору, историку Сапаралиеву Дөөлөтбеку Бекишовичу 70 лет</p>
                            <div className={styles.anchor}>
                                <a href="">Подробнее</a>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <p>Профессору, историку Сапаралиеву Дөөлөтбеку Бекишовичу 70 лет</p>
                            <div className={styles.anchor}>
                                <a href="">Подробнее</a>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <p>Профессору, историку Сапаралиеву Дөөлөтбеку Бекишовичу 70 лет</p>
                            <div className={styles.anchor}>
                                <a href="">Подробнее</a>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <p>Профессору, историку Сапаралиеву Дөөлөтбеку Бекишовичу 70 лет</p>
                            <div className={styles.anchor}>
                                <a href="">Подробнее</a>
                            </div>
                        </div>
                    </div>
                    <h4>Все новости</h4>
                </div>
            </div>
        </div>
    );
}

export default NewsSection;
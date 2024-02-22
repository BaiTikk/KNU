import React from 'react';
import styles from './Welcome.module.css'

function Welcome(props) {
    return (
        <div className={styles.welcome}>
            <div className={styles.boxShadow}></div>
            <div className={styles.container}>
                <div className={styles.welcomeText}>
                    <p>Мы рады вас приветствовать <br/> в нашем учебном заведений</p>
                    <p>Гарантия вашего будущего!</p>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
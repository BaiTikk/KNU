import React from 'react';
import styles from './AboutUs.module.css'

function AboutUs(props) {
    return (
        <div className={styles.aboutUs}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <div className={styles.video}>
                        <a href=""></a>
                    </div>
                    <div className={styles.about}>
                        <h2>О нас</h2>
                        <p>
                            государственное высшее учебное заведение Кыргызстана,
                            старейшее и крупнейшее высшее учебное заведение республики.
                            Расположено в Бишкеке. Учебное заведение создано 25 октября 1925 года.
                            Согласно постановлению состав КГПИ должен был состоять из 4-х факультетов:
                            педолого-педагогического, физико-математического,
                            общественно-экономического и литературно-лингвистического.[1]
                            Награждён орденом Трудового Красного Знамени (1982).
                        </p>
                        <button>читать больше</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
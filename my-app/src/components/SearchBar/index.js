import React from 'react';
import styles from './SearchBar.module.css'
import lupa from '../../assets/icons/searchBar/Group_1.svg'

function SearchBar(props) {
    return (
        <div className={styles.SearchBar}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <div className={styles.tema}>
                        <h2>Будем рады помочь в поиске информаций в нашем вузе</h2>
                    </div>
                    <div className={styles.search}>
                        <h3>Просто напишите, что хотите найти</h3>
                        <img src={lupa} alt=""/>
                    </div>
                    <div className={styles.btns}>
                        <button>Контакты</button>
                        <button>Поступление</button>
                        <button>Найти факультет</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
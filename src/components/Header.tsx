import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div className={styles.header__wrapper}>
            <div>Welcome#NAME#</div>
            <div>Wrong tries: #COUNT#</div>
        </div>
    );
};

export default Header;